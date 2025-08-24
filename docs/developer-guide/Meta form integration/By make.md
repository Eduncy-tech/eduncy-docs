# By make

# Public Lead API — Integration with Make.com

This guide explains how to integrate the **Public Lead API** into **Make.com** (or any automation platform with HTTP request nodes).

## Why Use Make?

Make is one of the easiest automation tools for connecting lead sources with your CRM. It allows you to listen to triggers (like TikTok, Facebook Lead Ads, or Google Sheets) and then send the data directly to the Public Lead API via an HTTP request.

Almost every automation tool provides an **HTTP request node**, and this is essential because it lets us call external APIs with the exact payload we want.

---

## Facebook Lead Ads → Public Lead API

1. **Trigger Setup**

   - In Make, add a trigger node: **Facebook Lead Ads → Watch Leads**.
     ![https://lh3.googleusercontent.com/d/1fcoE337KjH0KBAJmUniN3LS-v9EzEtGZ](https://lh3.googleusercontent.com/d/1fcoE337KjH0KBAJmUniN3LS-v9EzEtGZ)
   - Create a new Facebook connection (you’ll be asked to log in).
     ![https://lh3.googleusercontent.com/d/1a25E8PiwfQZ16-77bvhwF70-WULXz70K](https://lh3.googleusercontent.com/d/1a25E8PiwfQZ16-77bvhwF70-WULXz70K)
     ![https://lh3.googleusercontent.com/d/1Seek1SHbC_fLbx6sjF9qdMTCa3TyVgZz](https://lh3.googleusercontent.com/d/1Seek1SHbC_fLbx6sjF9qdMTCa3TyVgZz)
   - Choose the **Page** and **Form** you want to listen to.

2. **Add HTTP Request Node**

   - After the trigger, add a **HTTP → Make a Request** node.
   - Set:

     - **URL**: `your-domain/api/create-lead`
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
   > Make will show you a panel on the left with all the fields returned by your trigger (form responses, campaign metadata, etc.).
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
