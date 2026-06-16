export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#f7faf9] via-white to-[#eaf3f8] text-[#14201d]">
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <div className="font-serif text-xl font-semibold tracking-tight">
          Muhammed Tankılıç
        </div>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#portre">Portre</a>
          <a href="#hekimlik">Hekimlik</a>
          <a href="#muzik">Müzik</a>
          <a href="#yazilar">Yazılar</a>
          <a href="#arsiv">Arşiv</a>
          <a href="#iletisim">İletişim</a>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <button>Giriş Yap</button>

          <button className="rounded-full bg-[#173d56] px-5 py-2.5 text-white">
            Kayıt Ol
          </button>
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-96px)] items-center px-6 py-20 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#39785d]">
            İki Disiplin, Tek İmza
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight md:text-8xl">
            Muhammed Tankılıç
          </h1>

          <p className="mt-6 text-lg font-medium text-[#34596d] md:text-xl">
            Doktor · Müzisyen · İçerik Üreticisi
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#52615d]">
            Bilim, sanat ve insan hikâyelerinin kesişiminde.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#hekimlik"
              className="rounded-full bg-[#173d56] px-7 py-4 text-center font-medium text-white transition hover:-translate-y-1"
            >
              Hekimlik Yolculuğu
            </a>

            <a
              href="#muzik"
              className="rounded-full border border-[#173d56]/20 bg-white/70 px-7 py-4 text-center font-medium text-[#173d56] backdrop-blur transition hover:-translate-y-1"
            >
              Müziği Keşfet
            </a>
          </div>
        </div>
      </section>

      <section
        id="muzik"
        className="bg-[#10231d] px-6 py-24 text-white md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7fb895]">
            Müzik
          </p>

          <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
            Kürtçe akustik ve halk müziğinden seçilmiş çalışmalar
          </h2>

          <div className="mt-12 rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm text-white/60">Son yayın</p>

            <h3 className="mt-3 font-serif text-3xl">
              Yeni eser yakında burada
            </h3>

            <p className="mt-4 max-w-xl leading-7 text-white/70">
              Şarkı dosyaları, kapak görselleri ve video bağlantıları
              eklendiğinde bu alan gerçek içerikle güncellenecek.
            </p>

            <button className="mt-8 rounded-full bg-[#39785d] px-6 py-3 font-medium text-white hover:-translate-y-1">
              Müziği Dinle
            </button>
          </div>
        </div>
      </section>

      <section
        id="hekimlik"
        className="bg-[#f7faf9] px-6 py-24 text-[#14201d] md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#34596d]">
            Hekimlik
          </p>

          <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
            Bilimsel güveni, sade ve anlaşılır bir dille buluşturmak
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-[#173d56]/10 bg-white p-7">
              <h3 className="font-serif text-2xl">Kısa Tanıtım</h3>

              <p className="mt-4 leading-7 text-[#52615d]">
                Gaziantep Üniversitesi Tıp Fakültesi mezunu, Mardin’de acil
                serviste görev yapan pratisyen hekim.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#173d56]/10 bg-white p-7">
              <h3 className="font-serif text-2xl">İlgi Alanları</h3>

              <p className="mt-4 leading-7 text-[#52615d]">
                Uzmanlık ve özel ilgi alanları daha sonra eklenecek.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#173d56]/10 bg-white p-7">
              <h3 className="font-serif text-2xl">Seçilmiş Yazılar</h3>

              <p className="mt-4 leading-7 text-[#52615d]">
                Tıbbi ve profesyonel içerikler burada listelenecek.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="yazilar"
        className="bg-white px-6 py-24 text-[#14201d] md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#9c3f3f]">
            Yazılar
          </p>

          <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
            Tıp, sanat ve insan hikâyeleri üzerine
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[28px] border border-black/5 bg-[#f7faf9] p-8">
              <p className="text-sm text-[#39785d]">Tıp ve Sağlık</p>

              <h3 className="mt-3 font-serif text-3xl">
                İlk tıbbi yazı yakında burada
              </h3>

              <p className="mt-4 leading-7 text-[#52615d]">
                Bilimsel güveni koruyan, sade ve anlaşılır içerikler bu alanda
                yayımlanacak.
              </p>
            </article>

            <article className="rounded-[28px] border border-black/5 bg-[#f7faf9] p-8">
              <p className="text-sm text-[#9c3f3f]">
                Denemeler ve Düşünceler
              </p>

              <h3 className="mt-3 font-serif text-3xl">
                İlk kişisel yazı yakında burada
              </h3>

              <p className="mt-4 leading-7 text-[#52615d]">
                Sanat, kültür, yolculuk ve insan hikâyeleri üzerine yazılar
                burada yer alacak.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="portre"
        className="bg-[#eef5f2] px-6 py-24 text-[#14201d] md:px-12"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#39785d]">
              Portre
            </p>

            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              Doktorluk, müzik ve kültür arasında şekillenen bir yolculuk
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-[#52615d]">
              Muhammed Tankılıç, 23 Aralık 1999’da Van’ın Muradiye ilçesinde
              doğdu. Gaziantep Üniversitesi Tıp Fakültesi’nden Şubat 2025’te
              mezun oldu. Müzikle 17 yaşından beri ilgileniyor.
            </p>

            <button className="mt-8 rounded-full bg-[#173d56] px-6 py-3 font-medium text-white hover:-translate-y-1">
              Portreyi Keşfet
            </button>
          </div>

          <div className="flex min-h-80 items-center justify-center rounded-4xl border border-[#173d56]/10 bg-white text-center text-[#52615d]">
            Portre fotoğrafı daha sonra eklenecek
          </div>
        </div>
      </section>

      <section
        id="arsiv"
        className="bg-[#10231d] px-6 py-24 text-white md:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7fb895]">
            Arşiv
          </p>

          <h2 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
            Fotoğraflar, videolar, röportajlar ve etkinlikler
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Fotoğraflar", "Videolar", "Röportajlar", "Etkinlikler"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
                >
                  <h3 className="font-serif text-2xl">{item}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    İçerikler daha sonra eklenecek.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <footer
        id="iletisim"
        className="bg-[#081712] px-6 py-16 text-white md:px-12"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-3xl">Muhammed Tankılıç</h2>

            <p className="mt-4 max-w-sm leading-7 text-white/60">
              Bilim, sanat ve insan hikâyelerinin kesişiminde.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Hızlı Bağlantılar</h3>

            <div className="mt-4 flex flex-col gap-3 text-white/60">
              <a href="#portre">Portre</a>
              <a href="#hekimlik">Hekimlik</a>
              <a href="#muzik">Müzik</a>
              <a href="#yazilar">Yazılar</a>
              <a href="#arsiv">Arşiv</a>
            </div>
          </div>

          <div>
            <h3 className="font-medium">İletişim</h3>

            <p className="mt-4 leading-7 text-white/60">
              İletişim e-posta adresi daha sonra eklenecek.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/40">
          © 2026 Muhammed Tankılıç. Tüm hakları saklıdır.
        </div>
      </footer>
    </main>
  );
}