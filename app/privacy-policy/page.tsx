import PrivacyPolicy from "@/templates/shadcn/pages/privacy-policy";
import { page } from "@/data/demo";

export default async function () {
  return <PrivacyPolicy page={page} />;
} 