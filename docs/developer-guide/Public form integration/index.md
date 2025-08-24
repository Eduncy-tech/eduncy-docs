# coding

# Public Lead API Documentation

This document describes how to use the public lead creation API endpoint.

## Endpoint Details

- **Method**: POST
- **Domain**: `http://lands.eduncy.com`
- **Path**: `/api/create-lead`
- **Content-Type**: application/json

## Request Body

```typescript
{
  "organizationId": string,    // Your organization ID
  "name": string,              // Lead's full name
  "phone": string,             // Lead's phone number
  "sourceMethod": string,      // Help developer to know where this lead come from
  "email"?: string,            // Optional: Lead's email address
  "comments"?: string[],       // Optional: Array of comment strings
  "info"?: Record<string,any>, // Optional: Additional information key-value pairs
}
```

## Response

The API returns a JSON object with the following structure:

```typescript
{
  "message": string // "success" on successful creation, or error message
}
```

## Example Usage

```javascript
const createLead = async () => {
  try {
    const response = await fetch("${Domain}/api/create-lead}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        organizationId: "your-organization-id",
        name: "John Doe",
        phone: "+1234567890",
        email: "john@example.com",
        comments: ["Interested in our services"],
        info: {
          yearsOfStudy: "ما عدد سنين الدراسة؟",
        },
      }),
    });

    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error("Error creating lead:", error);
  }
};
```

## Important Notes

1. The `organizationId` is required and must be valid.
2. If a lead with the same phone number already exists, the API will return "Lead already exists".
3. At least one contact method (phone or email) should be provided.

## Error Handling

The API may return the following error responses:

- **401 Unauthorized**: When the organization is not found
- **400 Bad Request**: When required fields are missing or invalid
- **409 Conflict**: When the lead already exists

## Support

If you need assistance or have questions about implementing the API, please contact our support team.
