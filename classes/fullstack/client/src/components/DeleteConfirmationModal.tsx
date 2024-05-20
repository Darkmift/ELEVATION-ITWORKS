import React from 'react';
import { useTranslation } from 'react-i18next';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white dark:bg-darkCard p-6 rounded shadow-md">
        <h2 className="text-lg font-bold text-gray-900 dark:text-darkText mb-4">{t('users.confirmDelete')}</h2>
        <p className="text-gray-700 dark:text-darkText mb-4">{t('users.confirmDeleteMessage')}</p>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            {t('users.cancel')}
          </button>
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            {t('users.deleteUser')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
