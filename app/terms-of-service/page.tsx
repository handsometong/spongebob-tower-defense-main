import TermsOfService from "@/templates/shadcn/pages/terms-of-service";
import { page } from "@/data/demo";

export default async function () {
  return <TermsOfService page={page} />;
} 