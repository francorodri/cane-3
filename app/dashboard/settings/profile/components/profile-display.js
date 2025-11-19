import Link from 'next/link';
import Button from '@/components/button';
import Label from '@/components/label';

export function ProfileDisplay({ profile }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label>Display Name</Label>
          <p className="text-gray-900 dark:text-gray-100">{profile?.display_name || 'N/A'}</p>
        </div>
        <div>
          <Label>Names</Label>
          <p className="text-gray-900 dark:text-gray-100">{profile?.names || 'N/A'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label>Last Names</Label>
          <p className="text-gray-900 dark:text-gray-100">{profile?.lastnames || 'N/A'}</p>
        </div>
        <div>
          <Label>Birthday</Label>
          <p className="text-gray-900 dark:text-gray-100">{profile?.birthday || 'N/A'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label>Country</Label>
          <p className="text-gray-900 dark:text-gray-100">{profile?.country || 'N/A'}</p>
        </div>
        <div>
          <Label>Gender</Label>
          <p className="text-gray-900 dark:text-gray-100">{profile?.gender || 'N/A'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label>Address</Label>
          <p className="text-gray-900 dark:text-gray-100">{profile?.address || 'N/A'}</p>
        </div>
        <div>
          <Label>City</Label>
          <p className="text-gray-900 dark:text-gray-100">{profile?.city || 'N/A'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <Label>Phone Number</Label>
          <p className="text-gray-900 dark:text-gray-100">{profile?.phone_number || 'N/A'}</p>
        </div>
        <div>
          <Label>Email</Label>
          <p className="text-gray-900 dark:text-gray-100">{profile?.email || 'N/A'}</p>
        </div>
      </div>

      <Link href="/dashboard/settings/profile?edit=true">
        <Button>Edit Profile</Button>
      </Link>
    </div>
  );
}
