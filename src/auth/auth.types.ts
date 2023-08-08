import type { Session as SupabaseSession } from '@supabase/auth-helpers-nextjs';

export type Session = SupabaseSession & {
	profile: { username: string; bornAt: Date };
};
