-- ==================================================
-- AI映画ポスタージェネレーター用 Supabaseスキーマ
-- ==================================================

-- ==================================================
-- 1. テーブル作成
-- ==================================================

-- ポスターテーブル
CREATE TABLE "public"."posters" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    "user_id" uuid NOT NULL,
    "image_url" text NOT NULL,
    "model_id" text NOT NULL,
    "prompt" text,
    "created_at" timestamp with time zone NOT NULL DEFAULT now(),
    "updated_at" timestamp with time zone NOT NULL DEFAULT now()
);

-- クレジットテーブル
CREATE TABLE "public"."credits" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    "user_id" uuid NOT NULL UNIQUE,
    "price_id" text,
    "customer_id" text,
    "credits" integer NOT NULL DEFAULT 0,
    "created_at" timestamp with time zone NOT NULL DEFAULT now(),
    "updated_at" timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "credits_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- モデルテーブル
CREATE TABLE "public"."models" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    "user_id" uuid NOT NULL,
    "name" text NOT NULL,
    "status" text NOT NULL DEFAULT 'pending',
    "model_id" text,
    "type" text,
    "training_started_at" timestamp with time zone,
    "training_completed_at" timestamp with time zone,
    "error_message" text,
    "created_at" timestamp with time zone NOT NULL DEFAULT now(),
    "updated_at" timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT "models_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

-- ==================================================
-- 2. ストレージバケット作成
-- ==================================================

INSERT INTO storage.buckets (id, name, public)
VALUES ('movie-posters', 'movie-posters', true)
ON CONFLICT (id) DO NOTHING;

-- ==================================================
-- 3. インデックス作成
-- ==================================================

-- ポスターテーブル
CREATE INDEX posters_created_at_idx ON public.posters USING btree (created_at);

-- モデルテーブル
CREATE INDEX models_user_id_idx ON public.models USING btree (user_id);
CREATE INDEX models_status_idx ON public.models USING btree (status);
CREATE INDEX models_created_at_idx ON public.models USING btree (created_at);
CREATE INDEX models_model_id_idx ON public.models USING btree (model_id);

-- ==================================================
-- 4. RLS有効化
-- ==================================================

ALTER TABLE "public"."posters" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."credits" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."models" ENABLE ROW LEVEL SECURITY;

-- ==================================================
-- 5. RLSポリシー設定
-- ==================================================

-- ポスターテーブル
CREATE POLICY "ポスター_全員読み取り可" ON "public"."posters" FOR SELECT TO public USING (true);
CREATE POLICY "ポスター_認証ユーザー作成可" ON "public"."posters" FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "ポスター_所有者のみ更新可" ON "public"."posters" FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "ポスター_所有者のみ削除可" ON "public"."posters" FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- クレジットテーブル
CREATE POLICY "クレジット_所有者のみ読み取り可" ON "public"."credits" FOR SELECT TO public USING (auth.uid() = user_id);
CREATE POLICY "クレジット_作成禁止" ON "public"."credits" FOR INSERT TO public WITH CHECK (false);
CREATE POLICY "クレジット_更新禁止" ON "public"."credits" FOR UPDATE TO public USING (false);
CREATE POLICY "クレジット_所有者のみ削除可" ON "public"."credits" FOR DELETE TO public USING (auth.uid() = user_id);

-- モデルテーブル
CREATE POLICY "モデル_所有者のみ読み取り可" ON "public"."models" FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "モデル_認証ユーザー作成可" ON "public"."models" FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "モデル_所有者のみ更新可" ON "public"."models" FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "モデル_所有者のみ削除可" ON "public"."models" FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- ストレージポリシー
CREATE POLICY "ストレージ_認証ユーザーアップロード可" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'movie-posters');
CREATE POLICY "ストレージ_全員読み取り可" ON storage.objects FOR SELECT TO public USING (bucket_id = 'movie-posters');
CREATE POLICY "ストレージ_認証ユーザー削除可" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'movie-posters');

-- ==================================================
-- 6. 権限設定
-- ==================================================

-- anon（匿名）ロール
GRANT SELECT ON TABLE "public"."posters" TO "anon";
GRANT ALL ON TABLE "public"."credits" TO "anon";

-- authenticated（認証済み）ロール
GRANT ALL ON TABLE "public"."posters" TO "authenticated";
GRANT ALL ON TABLE "public"."credits" TO "authenticated";
GRANT ALL ON TABLE "public"."models" TO "authenticated";

-- service_role（サービス）ロール
GRANT ALL ON TABLE "public"."posters" TO "service_role";
GRANT ALL ON TABLE "public"."credits" TO "service_role";
GRANT ALL ON TABLE "public"."models" TO "service_role";