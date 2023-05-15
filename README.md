# Net Blocker

Net Blocker is a Chrome extension that allows you to block content from loading on web pages based on a regular expression filter.

## Motivation

- I wanted to avoid the distraction and annoyance of clickbait thumbnails on YouTube.

## Features

- Block media from loading on web pages by matching their URLs or file extensions with a regular expression
- Update the regular expression filter by entering it in the popup form and clicking the update button
- Save the regular expression filter in local storage for future use

## Installation

To install Net Blocker, follow these steps:

- Download or clone this repository to your local machine
- Open Chrome and go to `chrome://extensions`
- Enable developer mode by toggling the switch in the top right corner
- Click the "Load unpacked" button and select the folder where you downloaded or cloned this repository
- You should see the Media Blocker icon in the toolbar

## Usage

To use Net Blocker, follow these steps:

- Click the Net Blocker icon to open the popup form
- Enter a regular expression to match the URLs or file extensions of the media you want to block. For example, "ytimg" will block all images from ytimg.com (YouTube). Multiple entries are separated like this: "ytimg|.jpg".
- Click the update button to apply the filter and reload the current tab

