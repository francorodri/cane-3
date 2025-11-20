import Link from 'next/link';
import Button from '@/components/button';
import Label from '@/components/label';

export function ProfileDisplay({ profile }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 md:gap-y-6 md:gap-x-8">
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Display Name</Label>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{profile?.display_name || 'N/A'}</p>
        </div>
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Names</Label>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{profile?.names || 'N/A'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Last Names</Label>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{profile?.lastnames || 'N/A'}</p>
        </div>
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Birthday</Label>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{profile?.birthday || 'N/A'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Country</Label>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{profile?.country || 'N/A'}</p>
        </div>
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Gender</Label>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{profile?.gender || 'N/A'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Address</Label>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{profile?.address || 'N/A'}</p>
        </div>
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">City</Label>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{profile?.city || 'N/A'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone Number</Label>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{profile?.phone_number || 'N/A'}</p>
        </div>
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</Label>
          <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">{profile?.email || 'N/A'}</p>
        </div>
      </div>

      <Link href="/dashboard/settings/profile?edit=true">
        <Button className="w-full sm:w-auto">Edit Profile</Button>
      </Link>
    </div>
  );
}
