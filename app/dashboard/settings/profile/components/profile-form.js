'use client'

import { updateProfile } from '@/lib/actions';
import Input from '@/components/input';
import Label from '@/components/label';
import SubmitButton from '@/components/submit-button';
import Button from '@/components/button';
import { useFormState } from 'react-dom';
import FormError from '@/components/form-error';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export function ProfileForm({ profile }) {
  const [state, formAction] = useFormState(updateProfile, undefined);
  const { t } = useLanguage();

  return (
    <form action={formAction} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 md:gap-y-6 md:gap-x-8">
        <div>
          <Label htmlFor="display_name" className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile_settings.display_name")}</Label>
          <Input
            id="display_name"
            name="display_name"
            type="text"
            defaultValue={profile?.display_name || ''}
            placeholder={t("profile_settings.your_display_name")}
            className="mt-1"
          />
          <FormError error={state?.errors?.display_name} />
        </div>
        <div>
          <Label htmlFor="names" className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile_settings.names")}</Label>
          <Input
            id="names"
            name="names"
            type="text"
            defaultValue={profile?.names || ''}
            placeholder={t("profile_settings.your_names")}
            className="mt-1"
          />
          <FormError error={state?.errors?.names} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <Label htmlFor="lastnames" className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile_settings.last_names")}</Label>
          <Input
            id="lastnames"
            name="lastnames"
            type="text"
            defaultValue={profile?.lastnames || ''}
            placeholder={t("profile_settings.your_last_names")}
            className="mt-1"
          />
          <FormError error={state?.errors?.lastnames} />
        </div>
        <div>
          <Label htmlFor="birthday" className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile_settings.birthday")}</Label>
          <Input
            id="birthday"
            name="birthday"
            type="date"
            defaultValue={profile?.birthday || ''}
            className="mt-1"
          />
          <FormError error={state?.errors?.birthday} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <Label htmlFor="country" className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile_settings.country")}</Label>
          <Input
            id="country"
            name="country"
            type="text"
            defaultValue={profile?.country || ''}
            placeholder={t("profile_settings.your_country")}
            className="mt-1"
          />
          <FormError error={state?.errors?.country} />
        </div>
        <div>
          <Label htmlFor="gender" className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile_settings.gender")}</Label>
          <Input
            id="gender"
            name="gender"
            type="text"
            defaultValue={profile?.gender || ''}
            placeholder={t("profile_settings.your_gender")}
            className="mt-1"
          />
          <FormError error={state?.errors?.gender} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <Label htmlFor="address" className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile_settings.address")}</Label>
          <Input
            id="address"
            name="address"
            type="text"
            defaultValue={profile?.address || ''}
            placeholder={t("profile_settings.your_address")}
            className="mt-1"
          />
          <FormError error={state?.errors?.address} />
        </div>
        <div>
          <Label htmlFor="city" className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile_settings.city")}</Label>
          <Input
            id="city"
            name="city"
            type="text"
            defaultValue={profile?.city || ''}
            placeholder={t("profile_settings.your_city")}
            className="mt-1"
          />
          <FormError error={state?.errors?.city} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <Label htmlFor="phone_number" className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile_settings.phone_number")}</Label>
          <Input
            id="phone_number"
            name="phone_number"
            type="text"
            defaultValue={profile?.phone_number || ''}
            placeholder={t("profile_settings.your_phone_number")}
            className="mt-1"
          />
          <FormError error={state?.errors?.phone_number} />
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("profile_settings.email")}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue={profile?.email || ''}
            placeholder={t("profile_settings.your_email")}
            disabled
            className="mt-1"
          />
      <FormError error={state?.errors?.email} />
    </div>
  </div>

  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 md:mt-6">
    <SubmitButton className="w-full sm:w-auto">{t("profile_settings.update_profile")}</SubmitButton>
    <Link href="/dashboard/settings/profile" className="w-full sm:w-auto">
      <Button variant="outline" className="w-full">{t("profile_settings.cancel")}</Button>
    </Link>
  </div>
  <FormError error={state?.message} />
</form>
  );
}
