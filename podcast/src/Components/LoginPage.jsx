import { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../supabase';

export default function Login({ onLogin }) {

    const [session, setSession] = useState(null);

    useEffect(() => {

        supabase.auth.getSession().then(({ data: { session } }) => {

            setSession(session);

        });

        const { data: { subscription }, } = supabase.auth.onAuthStateChange((_event, session) => {

            setSession(session);

            if (session) {

                onLogin();
            }

        });

        return () => subscription.unsubscribe();

    }, [onLogin]);

    if (!session) {

        return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['discord']} theme='dark' />;

    }


}
