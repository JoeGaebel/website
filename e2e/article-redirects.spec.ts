import {test, expect} from "@playwright/test"

test.describe("Article Redirects", () => {
    test("previous article URL redirects to new URL", async ({page}) => {
        await page.goto("/articles/agentic-gold-standard-development")
        await expect(page).toHaveURL(/\/articles\/principled-agentic-software-development/)
    })
})
