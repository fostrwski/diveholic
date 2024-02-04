import { supabase } from 'common/utils/supabaseClient';
import { useState } from 'react';

export default function useSignUp() {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  async function signUp(
    email: string,
    password: string,
    firstName: string,
    agreeToPrivacyPolicy: boolean,
  ) {
    try {
      setLoading(true);
      setSuccess(false);
      setError('');

      if (!email || !password || !firstName || !agreeToPrivacyPolicy) {
        setLoading(false);
        return;
      }

      const { error } = await supabase.auth.signUp(
        { email, password },
        {
          data: {
            first_name: firstName,
          },
        },
      );

      if (error) {
        console.error(error);
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

  return { loading, success, error, signUp };
}
