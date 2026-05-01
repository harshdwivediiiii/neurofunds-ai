'use server';

import { defaultCategories } from '@/data/categories';
import { AddTransactionForm } from '../_components/transaction-form';
import { getUserAccounts } from '@/services/dashboard';
import { getTransaction } from '@/services/transaction';

export default async function AddTransactionPage({
  searchParams: searchParamsPromise,      // ← receive the promise
}) {
  const searchParams = await searchParamsPromise; // ← await it
  const editId = searchParams?.edit;

  const accounts = await getUserAccounts();

  let initialData = null;
  if (editId) {
    initialData = await getTransaction(editId);
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-5xl gradient-title">Add Transaction</h1>
      </div>

      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
}
