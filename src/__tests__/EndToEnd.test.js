import puppeteer from 'puppeteer';
import { test, describe, expect } from '@jest/globals';

describe('show/hide an event details', () => {
  test('An event element is collapsed by default', async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('.event');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
    const events = await page.evaluate(() => document.querySelectorAll('.event').length);
    console.log('Number of events:', events);
    await browser.close();
  }, 10000);

  test('User can expand an event to see its details', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('.event');
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
    await browser.close();
  }, 10000);

  test('User can collapse an event to hide details', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('.event');
    await page.click('.event .details-btn');
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
    await browser.close();
  }, 10000);
});