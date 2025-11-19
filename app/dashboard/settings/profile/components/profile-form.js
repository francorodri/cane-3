'use client'

import { updateProfile } from '@/lib/actions';
import Input from '@/components/input';
import Label from '@/components/label';
import SubmitButton from '@/components/submit-button';
import Button from '@/components/button';
import { useFormState } from 'react-dom';
import FormError from '@/components/form-error';
import Link from 'next/link';

export function ProfileForm({ profile }) {
  const [state, formAction] = useFormState(updateProfile, undefined);

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="display_name">Display Name</Label>
          <Input
            id="display_name"
            name="display_name"
            type="text"
            defaultValue={profile?.display_name || ''}
            placeholder="Your display name"
          />
          <FormError error={state?.errors?.display_name} />
        </div>
        <div>
          <Label htmlFor="names">Names</Label>
          <Input
            id="names"
            name="names"
            type="text"
            defaultValue={profile?.names || ''}
            placeholder="Your names"
          />
          <FormError error={state?.errors?.names} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="lastnames">Last Names</Label>
          <Input
            id="lastnames"
            name="lastnames"
            type="text"
            defaultValue={profile?.lastnames || ''}
            placeholder="Your last names"
          />
          <FormError error={state?.errors?.lastnames} />
        </div>
        <div>
          <Label htmlFor="birthday">Birthday</Label>
          <Input
            id="birthday"
            name="birthday"
            type="date"
            defaultValue={profile?.birthday || ''}
          />
          <FormError error={state?.errors?.birthday} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            name="country"
            type="text"
            defaultValue={profile?.country || ''}
            placeholder="Your country"
          />
          <FormError error={state?.errors?.country} />
        </div>
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Input
            id="gender"
            name="gender"
            type="text"
            defaultValue={profile?.gender || ''}
            placeholder="Your gender"
          />
          <FormError error={state?.errors?.gender} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            type="text"
            defaultValue={profile?.address || ''}
            placeholder="Your address"
          />
          <FormError error={state?.errors?.address} />
        </div>
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            type="text"
            defaultValue={profile?.city || ''}
            placeholder="Your city"
          />
          <FormError error={state?.errors?.city} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone_number">Phone Number</Label>
          <Input
            id="phone_number"
            name="phone_number"
            type="text"
            defaultValue={profile?.phone_number || ''}
            placeholder="Your phone number"
          />
          <FormError error={state?.errors?.phone_number} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue={profile?.email || ''}
            placeholder="Your email"
            disabled
          />
      <FormError error={state?.errors?.email} />
    </div>
  </div>

  <div className="flex space-x-4">
    <SubmitButton>Update Profile</SubmitButton>
    <Link href="/dashboard/settings/profile">
      <Button variant="outline">Cancel</Button>
    </Link>
  </div>
  <FormError error={state?.message} />
</form>
  );
}
