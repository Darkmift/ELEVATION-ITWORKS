import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useTranslation } from 'react-i18next';
import InputField from '../components/InputField';

const EditUserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getUserById, updateUser } = useUser();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dob: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        const userData = await getUserById(id);
        if (userData) {
          setUser({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: '',
            dob: userData.dob || '',
          });
        }
      }
    };
    fetchUser();
  }, [id, getUserById]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!user.firstName) newErrors.firstName = t('editUser.error.firstName');
    if (!user.lastName) newErrors.lastName = t('editUser.error.lastName');
    if (!user.email) {
      newErrors.email = t('editUser.error.emailRequired');
    } else if (!user.email.includes('@')) {
      newErrors.email = t('editUser.error.emailInvalid');
    }
    if (!user.password) {
      newErrors.password = t('editUser.error.passwordRequired');
    } else if (user.password.length < 6) {
      newErrors.password = t('editUser.error.passwordLength');
    }
    if (!user.dob) newErrors.dob = t('editUser.error.dob');

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (id) {
      const result = await updateUser(id, user);
      if (!result) {
        setErrors({ general: t('editUser.error.updating') });
      }
    } else {
      setErrors({ general: t('editUser.error.userId') });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-darkBackground">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-darkCard p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-gray-900 dark:text-darkText">{t('editUser.title')}</h2>
        <InputField label={t('editUser.firstName')} type="text" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} error={errors.firstName} />
        <InputField label={t('editUser.lastName')} type="text" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} error={errors.lastName} />
        <InputField label={t('editUser.email')} type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} error={errors.email} />
        <InputField label={t('editUser.password')} type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} error={errors.password} />
        <InputField label={t('editUser.dob')} type="date" value={user.dob} onChange={(e) => setUser({ ...user, dob: e.target.value })} error={errors.dob} />
        {errors.general && <div className="text-red-500 mb-4">{errors.general}</div>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          {t('editUser.updateButton')}
        </button>
      </form>
    </div>
  );
};

export default EditUserPage;
