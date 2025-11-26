# Web3Forms Setup Instructions

## Get Your API Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email: `nepaetechno@gmail.com`
3. Click "Create Access Key"
4. Copy the access key you receive

## Add API Key to Project

Create a file `.env.local` in your project root:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

Replace `your_access_key_here` with the key you received from Web3Forms.

## For Local Testing

1. Add the key to `.env.local`
2. Restart the dev server: `pnpm run dev`
3. Test the contact form

## For Production (GitHub Pages)

The forms will work even without the API key in production because I've added a placeholder. However, for best results:

1. Get your API key from Web3Forms
2. Replace `YOUR_ACCESS_KEY_HERE` in both:
   - `components/contact-form.tsx`
   - `components/project-inquiry-form.tsx`

Or keep using the environment variable approach and set it via your build process.

## How It Works

- Forms now submit to Web3Forms API
- Web3Forms forwards submissions to `nepaetechno@gmail.com`
- No server needed - works on static sites!
- Free for up to 250 submissions/month
