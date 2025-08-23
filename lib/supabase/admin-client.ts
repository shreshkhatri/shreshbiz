import { createClient } from '@supabase/supabase-js';


export async function createSupabaseAdminClient() {

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

    return createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });

}



// You can now use 'supabase' to perform operations with service role privileges
// For example:
// const { data, error } = await supabase.from('your_table').insert([{ column: 'value' }]);