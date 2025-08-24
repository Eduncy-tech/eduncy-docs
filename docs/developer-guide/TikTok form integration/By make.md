# By make

# Public Lead API — Integration with Make.com

This guide explains how to integrate the **Public Lead API** into **Make.com** (or any automation platform with HTTP request nodes).

## Why Use Make?

Make is one of the easiest automation tools for connecting lead sources with your CRM. It allows you to listen to triggers (like TikTok, Facebook Lead Ads, or Google Sheets) and then send the data directly to the Public Lead API via an HTTP request.

Almost every automation tool provides an **HTTP request node**, and this is essential because it lets us call external APIs with the exact payload we want.

---

## TikTok Lead Ads → Public Lead API

1. **Trigger Setup**

   - In Make, add a trigger node: **TikTok Lead Generation → Watch Leads**.
     ![https://lh3.googleusercontent.com/d/1GmJ2tzlNFT1xiRoACdFsbm5kEbLOzHkZ](https://lh3.googleusercontent.com/d/1GmJ2tzlNFT1xiRoACdFsbm5kEbLOzHkZ)
   - Click **Add Webhook**.
     ![https://lh3.googleusercontent.com/d/1rH5Ymqm6Oq5e5sehh3KBCJdjJxWTP637](https://lh3.googleusercontent.com/d/1rH5Ymqm6Oq5e5sehh3KBCJdjJxWTP637)
   - Then click **Add Connection** → **Create Connection**.
     ![https://lh3.googleusercontent.com/d/13hF3EPvzTJKeeS444iETJt0ri6zIp0_z](https://lh3.googleusercontent.com/d/13hF3EPvzTJKeeS444iETJt0ri6zIp0_z)
   - A window will open to authenticate with your TikTok account.
   - After authentication, select the **Advertiser ID** and **Form ID**.
     ![https://lh3.googleusercontent.com/d/1GHLZ0R2TZGsf7wXZoahn9LBpQTkAyaev](https://lh3.googleusercontent.com/d/1GHLZ0R2TZGsf7wXZoahn9LBpQTkAyaev)
   - Save the connection.

2. **Add HTTP Request Node**

   - After the trigger, add a **HTTP → Make a Request** node.
     ![https://lh3.googleusercontent.com/d/1giuhICn38Vltr34eLOfiZ4nkfsbtebfs](https://lh3.googleusercontent.com/d/1giuhICn38Vltr34eLOfiZ4nkfsbtebfs)
   - Set:

     - **URL**: `your-domain/api/create-lead`
     - **Method**: `POST`
     - **Body type**: `Raw`
     - **Content type**: `JSON`
       ![https://lh3.googleusercontent.com/d/1d3xIuCbT_Wb1CBfUTvdyOVquEYoTh4cP](https://lh3.googleusercontent.com/d/1d3xIuCbT_Wb1CBfUTvdyOVquEYoTh4cP)

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

   ![https://lh3.googleusercontent.com/d/102JGMhDBYyK8lkiaJfD6b3-UeEcwhjO_](https://lh3.googleusercontent.com/d/102JGMhDBYyK8lkiaJfD6b3-UeEcwhjO_)

   > Once pasted, click inside the request content field.
   > Make will show you a panel on the left with all the fields returned by your trigger (form responses, campaign metadata, etc.).
   > Drag and drop them into the JSON body where they belong.
   > ![https://lh3.googleusercontent.com/d/12ZEp2Ds0jUG6wGiMgLYZNtfl4qmm4v_u](https://lh3.googleusercontent.com/d/12ZEp2Ds0jUG6wGiMgLYZNtfl4qmm4v_u)

   These extra fields (`mainSourceId`, `campaignId`, etc.) act like **metadata**. Some platforms return them and like "AdGroup" like Tiktok or "AdSet" like Meta but leave it as it is in the schema
   `WARNING : THIS FORM IN IMAGE IS FOR UNDERSTANDING DONT FOLLOW ITS FIELDS NAMES`

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
