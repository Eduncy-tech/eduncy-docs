---
sidebar_position: 0
---

# Get Started

<div class="page-container">
<div class="content-container">

Welcome to the Eduncy Developer Guide! This comprehensive documentation will help you understand how to work with and extend the Eduncy platform through various integrations and development approaches.

<div class="container">
<div class="row">
<div class="col">
  <div
    class="card"
    onClick={() => (window.location.href = "/docs/category/google-sheet-integration")}
  >
    <div class="icon">📊</div>
    <div class="content">
      <h3>Google Sheet Integration</h3>
      <p>Integrate Eduncy with Google Sheets for data management and automation.</p>
    </div>
  </div>
</div>

<div class="col">
  <div
    class="card"
    onClick={() => (window.location.href = "/docs/category/meta-form-integration")}
  >
    <div class="icon">📱</div>
    <div class="content">
      <h3>Meta Form Integration</h3>
      <p>Connect Facebook and Instagram forms to streamline lead collection.</p>
    </div>
  </div>
</div>

<div class="col">
  <div
    class="card"
    onClick={() => (window.location.href = "/docs/category/public-form-integration")}
  >
    <div class="icon">🌐</div>
    <div class="content">
      <h3>Public Form Integration</h3>
      <p>Integrate public forms and webhooks for seamless data flow.</p>
    </div>
  </div>
</div>

<div class="col">
  <div
    class="card"
    onClick={() => (window.location.href = "/docs/category/tiktok-form-integration")}
  >
    <div class="icon">🎵</div>
    <div class="content">
      <h3>TikTok Form Integration</h3>
      <p>Connect TikTok lead forms to capture and manage leads effectively.</p>
    </div>
  </div>
</div>

</div>
</div>

</div>
</div>

<style>
  {`
.page-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
}

.content-container {
    width: 100%;
    max-width: 800px;
    padding: 0 1rem;
}

.container {
    width: 100%;
    margin: 2rem 0;
}

.row {
    display: grid;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
    gap: 1.5rem;
    width: 100%;
    margin: 0 -1.5rem;
    padding: 0 1.5rem;
}

.col {
    width: 100%;
    display: flex;
}

.card {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    height: 100%;
    width: 100%;
    border: 1px solid var(--ifm-color-emphasis-200);
    border-radius: 8px;
    transition: all 0.2s ease;
    cursor: pointer;
    background: var(--ifm-background-color);
    margin: 0;
}

.card:hover {
    border-color: var(--ifm-color-primary);
    text-decoration: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 1rem;
    font-size: 24px;
    flex-shrink: 0;
}

.content {
    flex: 1;
    text-align: center;
}

.content h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--ifm-heading-color);
}

.content p {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
    color: var(--ifm-color-emphasis-700);
    line-height: 1.5;
}

/* Make it responsive */
@media (max-width: 768px) {
    .row {
        grid-template-columns: 1fr;
    }

    .card {
        padding: 1rem;
    }
    
    .icon {
        width: 32px;
        height: 32px;
        font-size: 20px;
    }
    
    .content h3 {
        font-size: 1rem;
    }
    
    .content p {
        font-size: 0.85rem;
    }
}
`}
</style>
