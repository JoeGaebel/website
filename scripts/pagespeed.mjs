#!/usr/bin/env node

/**
 * PageSpeed Insights benchmarking script.
 * Runs a fresh analysis via pagespeed.web.dev and extracts results.
 *
 * Usage:
 *   node scripts/pagespeed.mjs [url] [mobile|desktop]
 *
 * Examples:
 *   node scripts/pagespeed.mjs                              # defaults: https://www.joegaebel.com/ mobile
 *   node scripts/pagespeed.mjs https://www.joegaebel.com/ desktop
 */

import { chromium } from '@playwright/test';

const url = process.argv[2] || 'https://www.joegaebel.com/';
const formFactor = process.argv[3] || 'mobile';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

console.log(`Running PageSpeed Insights for ${url} (${formFactor})...\n`);

const encoded = encodeURIComponent(url);
await page.goto(
    `https://pagespeed.web.dev/analysis?url=${encoded}&form_factor=${formFactor}`,
    { waitUntil: 'networkidle', timeout: 30000 }
);

// Check if results are cached; if not, trigger a new analysis
let text = await page.evaluate(() => document.body.innerText);
if (text.includes('Diagnose performance issues') && !text.includes('First Contentful Paint')) {
    console.log('No cached results, triggering new analysis...');
    await page.goto('https://pagespeed.web.dev/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    const input = page.locator('input[type="url"], input[name="url"]').first();
    await input.fill(url);
    await page.keyboard.press('Enter');
    console.log('Waiting for analysis to complete (up to 90s)...');
    await page.waitForTimeout(90000);
} else {
    // Already have results, wait a bit for full render
    await page.waitForTimeout(5000);
}

// Expand all audit details
const expandables = page.locator('.lh-audit__header, .lh-expandable-details summary, details summary');
const count = await expandables.count();
for (let i = 0; i < count; i++) {
    try { await expandables.nth(i).click({ timeout: 200 }); } catch {}
}
await page.waitForTimeout(2000);

text = await page.evaluate(() => document.body.innerText);
const lines = text.split('\n').filter(l => l.trim());

// --- Extract scores ---
const scoreLabels = ['Performance', 'Accessibility', 'Best Practices', 'SEO'];
const scores = {};
for (const label of scoreLabels) {
    const idx = lines.findIndex(l => l.trim() === label);
    if (idx >= 0 && idx + 1 < lines.length) {
        const val = parseInt(lines[idx + 1]);
        if (!isNaN(val) && val <= 100) scores[label] = val;
    }
}

// --- Extract metrics ---
const metricNames = [
    'First Contentful Paint', 'Largest Contentful Paint',
    'Total Blocking Time', 'Cumulative Layout Shift', 'Speed Index'
];
const metrics = {};
for (const name of metricNames) {
    const idx = lines.findIndex(l => l.trim() === name);
    if (idx >= 0 && idx + 1 < lines.length) {
        metrics[name] = lines[idx + 1].trim();
    }
}

// --- Extract specific sections ---
function extractSection(keyword, maxLines = 25) {
    const idx = lines.findIndex(l => l.toLowerCase().includes(keyword.toLowerCase()));
    if (idx < 0) return null;
    return lines.slice(idx, Math.min(idx + maxLines, lines.length));
}

// --- Print results ---
console.log('╔══════════════════════════════════════╗');
console.log('║       PageSpeed Insights Results      ║');
console.log('╚══════════════════════════════════════╝\n');

console.log(`URL: ${url}`);
console.log(`Form factor: ${formFactor}\n`);

console.log('SCORES:');
for (const [label, score] of Object.entries(scores)) {
    const color = score >= 90 ? '\x1b[32m' : score >= 50 ? '\x1b[33m' : '\x1b[31m';
    console.log(`  ${color}${score}\x1b[0m ${label}`);
}

console.log('\nMETRICS:');
for (const [name, value] of Object.entries(metrics)) {
    console.log(`  ${name}: ${value}`);
}

// LCP breakdown
const lcpBreakdown = extractSection('LCP breakdown', 15);
if (lcpBreakdown) {
    console.log('\nLCP BREAKDOWN:');
    const phases = ['Time to first byte', 'Resource load delay', 'Resource load duration', 'Element render delay'];
    for (const phase of phases) {
        const phaseIdx = lcpBreakdown.findIndex(l => l.includes(phase));
        if (phaseIdx >= 0 && phaseIdx + 1 < lcpBreakdown.length) {
            console.log(`  ${phase}: ${lcpBreakdown[phaseIdx + 1].trim()}`);
        }
    }
}

// Network dependency
const networkDep = extractSection('Maximum critical path latency', 10);
if (networkDep) {
    console.log('\nNETWORK DEPENDENCY CHAIN:');
    networkDep.slice(0, 8).forEach(l => console.log(`  ${l}`));
}

// Opportunities & diagnostics
const sections = [
    { keyword: 'Improve image delivery', label: 'IMAGE DELIVERY' },
    { keyword: 'Reduce unused JavaScript', label: 'UNUSED JAVASCRIPT' },
    { keyword: 'Avoid long main-thread', label: 'LONG MAIN-THREAD TASKS' },
    { keyword: 'Use efficient cache lifetimes', label: 'CACHE LIFETIMES' },
    { keyword: '3rd party', label: '3RD PARTIES' },
];

for (const { keyword, label } of sections) {
    const section = extractSection(keyword, 15);
    if (section) {
        console.log(`\n${label}:`);
        section.slice(0, 10).forEach(l => console.log(`  ${l}`));
    }
}

console.log('');
await browser.close();
