import {test, expect} from "@playwright/test"

test.describe("Visual Regression", () => {
    test("home page", async ({page}) => {
        await page.goto("/")
        await page.waitForLoadState("networkidle")
        await page.waitForTimeout(2000)
        await expect(page).toHaveScreenshot("home-full.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })

    test("home page - reviews expanded", async ({page}) => {
        await page.goto("/")
        await page.waitForLoadState("networkidle")
        await page.waitForTimeout(2000)
        // Scroll to reviews to trigger client:visible hydration
        await page.locator("#reviews").scrollIntoViewIfNeeded()
        // Wait for the astro-island to hydrate
        await page.waitForFunction(() => {
            const island = document.querySelector("#reviews astro-island")
            return island && island.hasAttribute("client-render-time")
        }, {timeout: 10000})
        await page.waitForTimeout(500)
        const seeMoreBtn = page.locator("#reviews button", {hasText: "See more"})
        await seeMoreBtn.click()
        await page.waitForTimeout(2000)
        await expect(page).toHaveScreenshot("home-reviews-expanded.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })

    test("articles listing", async ({page}) => {
        await page.goto("/articles")
        await page.waitForLoadState("networkidle")
        await expect(page).toHaveScreenshot("articles-listing.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })

    test("article post", async ({page}) => {
        await page.goto("/articles/agentic-gold-standard-development")
        await page.waitForLoadState("networkidle")
        await page.waitForTimeout(3000)
        await expect(page).toHaveScreenshot("article-post.png", {
            fullPage: true,
            maxDiffPixelRatio: 0.01,
        })
    })
})
