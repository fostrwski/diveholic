import { supabase } from 'common/utils/supabaseClient';
import { useState } from 'react';

export function useSignIn() {
  // TODO: Remove primitives
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  async function signIn(email: string, password: string) {
    try {
      setLoading(true);
      setSuccess(false);
      setError('');

      const { error } = await supabase.auth.signIn({ email, password });

      if (error) {
        setError(error.message);
        return;
      }

      setSuccess(true);
    } catch (error: any) {
      console.error(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, success, error, signIn };
}
