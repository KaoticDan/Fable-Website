-- Fable is the only collection in this site. The shared database keeps each site in its own namespace.
create table if not exists public.fable_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  form_type text not null check (form_type in ('whitelist', 'speedrun', 'media-consent')),
  source text not null check (length(source) between 1 and 120),
  email text not null check (length(email) between 3 and 256 and position('@' in email) > 1),
  name text check (name is null or length(name) <= 256),
  phone text check (phone is null or length(phone) <= 80),
  linkedin text check (linkedin is null or length(linkedin) <= 500),
  details jsonb not null default '{}'::jsonb check (jsonb_typeof(details) = 'object'),
  consent boolean,
  consent_version text,
  constraint fable_media_consent_required check (form_type <> 'media-consent' or (consent is true and consent_version = '2026-02-22'))
);

alter table public.fable_leads enable row level security;
revoke all on public.fable_leads from anon, authenticated;
grant insert on public.fable_leads to anon;
create policy "fable_public_form_insert" on public.fable_leads
  for insert to anon with check (true);
