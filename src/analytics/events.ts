import { logEvent } from 'firebase/analytics';
import { analyticsPromise } from '../lib/firebase';

const CONSENT_KEY = 'floreria_cookie_consent';

export function hasConsent(): boolean {
  return localStorage.getItem(CONSENT_KEY) === 'accepted';
}

export function setConsent(accepted: boolean): void {
  localStorage.setItem(CONSENT_KEY, accepted ? 'accepted' : 'rejected');
}

export function getConsentState(): 'accepted' | 'rejected' | null {
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === 'accepted' || value === 'rejected') return value;
  return null;
}

async function track(
  eventName: string,
  params?: Record<string, string | number>
): Promise<void> {
  if (!hasConsent()) return;
  const analytics = await analyticsPromise;
  if (!analytics) return;
  logEvent(analytics, eventName, params);
}

export const Analytics = {
  pageView: (path: string, title: string) =>
    track('page_view', { page_path: path, page_title: title }),

  viewCategory: (categoryName: string, categorySlug: string) =>
    track('view_category', { category_name: categoryName, category_slug: categorySlug }),

  filterSubcategory: (categorySlug: string, subcategorySlug: string) =>
    track('filter_subcategory', {
      category_slug: categorySlug,
      subcategory_slug: subcategorySlug,
    }),

  viewProduct: (productId: string | number, productName: string, categorySlug: string) =>
    track('view_product', {
      product_id: String(productId),
      product_name: productName,
      category_slug: categorySlug,
    }),

  contactProduct: (productId: string | number, productName: string, categorySlug: string) =>
    track('contact_product', {
      product_id: String(productId),
      product_name: productName,
      category_slug: categorySlug,
    }),

  clickOccasion: (occasionTitle: string, occasionSlug: string) =>
    track('click_occasion', { occasion_title: occasionTitle, occasion_slug: occasionSlug }),

  clickWhatsappFloat: () => track('click_whatsapp_float'),
};
