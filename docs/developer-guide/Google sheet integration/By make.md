# By make

# Public Lead API — Integration with Make.com

This guide explains how to integrate the **Public Lead API** into **Make.com** (or any automation platform with HTTP request nodes).

## Why Use Make?

Make is one of the easiest automation tools for connecting lead sources with your CRM. It allows you to listen to triggers (like TikTok, Facebook Lead Ads, or Google Sheets) and then send the data directly to the Public Lead API via an HTTP request.

Almost every automation tool provides an **HTTP request node**, and this is essential because it lets us call external APIs with the exact payload we want.

---

## Google Sheets → Public Lead API

1. **Trigger Setup**

   - In Make, add a trigger node: **Google Sheets → Watch Changes**.
     ![https://lh3.googleusercontent.com/d/1hfGw43aNIYVdCSgawLNINtFCB2Yj0aQX](https://lh3.googleusercontent.com/d/1hfGw43aNIYVdCSgawLNINtFCB2Yj0aQX)
   - Sign in with your Google account (you’ll be asked to authenticate).
     ![https://lh3.googleusercontent.com/d/1s1nNK54PY1z3VDfKNYChnRu2JKbbXOMK](https://lh3.googleusercontent.com/d/1s1nNK54PY1z3VDfKNYChnRu2JKbbXOMK)
     ![https://lh3.googleusercontent.com/d/1_AILAJH9MaWuG4jRLH9-uFt_q1KNTq0H](https://lh3.googleusercontent.com/d/1_AILAJH9MaWuG4jRLH9-uFt_q1KNTq0H)
   - Select the spreadsheet and worksheet you want to monitor.
   - The scenario will trigger whenever a row is added or updated.

2. **Add HTTP Request Node**

   - After the trigger, add a **HTTP → Make a Request** node.
   - Set:

     - **URL**: `http://lands.eduncy.com/api/create-lead`
     - **Method**: `POST`
     - **Body type**: `Raw`
     - **Content type**: `JSON`

3. **Prepare the JSON Body**
   Paste this empty JSON schema into the request body:

   ```json
   {
     "organizationId": "",
     "name": "",
     "sourceMethod": "",
     "phone": "",
     "email": "",
     "comments": [],
     "info": {},
     "mainSourceId": "",
     "mainSourceName": "",
     "campaignId": "",
     "campaignName": "",
     "adGroupId": "",
     "adGroupName": "",
     "adId": "",
     "adName": ""
   }
   ```

   > Once pasted, click inside the request content field.
   > Make will show you a panel on the left with all the columns returned from your spreadsheet row.
   > Drag and drop them into the JSON body where they belong.

These extra fields (`mainSourceId`, `campaignId`, etc.) act like **metadata**. Some platforms return them and like "AdGroup" like Tiktok or "AdSet" like Meta but leave it as it is in the schema

##### About `mainSourceId` and `mainSourceName`

In the JSON schema, you’ll notice two fields:

```json
"mainSourceId": "",
"mainSourceName": ""
```

These fields represent the **exact source** of the lead:

- **Meta (Facebook/Instagram)** → `mainSourceId` is usually the **Page ID**, and `mainSourceName` is the **Page Name**.
- **TikTok** → `mainSourceId` is the **Form ID**, and `mainSourceName` is the **Form Name**.
- **Other Platforms** → these values might represent the unique ID and name of the form, ad set, or page where the lead originated.

> This helps you track **exactly which form, page, or campaign** generated the lead.

---
