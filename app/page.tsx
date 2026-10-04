const capabilities = [
  "Управление обращениями",
  "Обработка пропущенных звонков",
  "Заявки с сайта",
  "Контроль следующего действия",
  "Воронка продаж",
  "Уведомления в Telegram",
  "AI-сводки и черновики ответов",
  "Автоматизация через n8n",
];

const technologies = ["Next.js", "TypeScript", "Supabase", "n8n", "GigaChat", "Telegram", "Vercel"];
const services = [
  "Внутренние бизнес-инструменты",
  "Системы управления обращениями",
  "Автоматизация рабочих процессов",
  "AI-интеграции",
  "API-интеграции",
];

const screenshots = [
  {
    src: "/leaddesk/dashboard.png",
    width: 2880,
    height: 1592,
    alt: "Главная LeadDesk с обращениями, требующими внимания",
    caption: "Главная — обращения, требующие внимания",
    className: "dashboard-shot",
  },
  {
    src: "/leaddesk/lead-detail.png",
    width: 2880,
    height: 1592,
    alt: "Карточка обращения Ольги Смирновой в LeadDesk с AI-помощником",
    caption: "Карточка обращения — следующее действие и AI-помощник",
  },
  {
    src: "/leaddesk/pipeline.png",
    width: 2880,
    height: 1590,
    alt: "Воронка обращений LeadDesk по этапам",
    caption: "Воронка — состояние обращений по этапам",
  },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="На главную">Ilias</a>
      <nav className="header-nav" aria-label="Основная навигация">
        <a className="header-link" href="#leaddesk">Проект</a>
        <a className="header-link" href="#build">Что я делаю</a>
        <a className="header-link" href="#contact">Контакты</a>
      </nav>
    </header>

    <section className="hero" id="top">
      <p className="eyebrow">AI · АВТОМАТИЗАЦИЯ · БИЗНЕС-СИСТЕМЫ</p>
      <h1>Создаю внутренние системы и автоматизации для бизнеса</h1>
      <p className="hero-copy">Помогаю убирать ручную работу там, где заявки, данные и действия сотрудников всё ещё связаны вручную.</p>
      <div className="actions">
        <a className="button primary" href="#leaddesk">Смотреть LeadDesk</a>
        <a className="button secondary" href="#contact">Связаться</a>
      </div>
    </section>

    <section className="case-study" id="leaddesk">
      <div className="section-heading">
        <p className="eyebrow">ПРОЕКТ</p>
        <h2>LeadDesk</h2>
        <p className="subtitle">Система обработки и восстановления входящих обращений</p>
        <dl className="project-meta">
          <div>
            <dt>МОЯ РОЛЬ</dt>
            <dd>Продуктовая логика · Архитектура системы · Разработка · Автоматизации · AI-интеграция</dd>
          </div>
            <div>
              <dt>СТАТУС</dt>
              <dd>
                Рабочий прототип / portfolio case<br />
                <a
                  className="header-link"
                  href="https://github.com/iliasick/leaddesk"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </dd>
            </div>
        </dl>
      </div>

      <div className="case-grid">
        <article>
          <p className="label">ПРОБЛЕМА</p>
          <p>Заявки приходят с сайта, телефона и других каналов. Если сотрудник не перезвонил вовремя или забыл следующий шаг, потенциальный клиент теряется.</p>
        </article>
        <article>
          <p className="label">РЕШЕНИЕ</p>
          <p>LeadDesk собирает обращения в одном месте, показывает статус и следующее действие, автоматизирует поступление новых лидов и помогает сотруднику работать с обращением.</p>
        </article>
      </div>

      <div className="screenshots" aria-label="Скриншоты LeadDesk">
        {screenshots.map(screenshot => (
          <figure className={`screenshot ${screenshot.className ?? ""}`} key={screenshot.src}>
            <Image
              src={screenshot.src}
              width={screenshot.width}
              height={screenshot.height}
              sizes={screenshot.className ? "(max-width: 680px) 100vw, 1116px" : "(max-width: 680px) 100vw, 50vw"}
              alt={screenshot.alt}
            />
            <figcaption>{screenshot.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div className="details-grid">
        <div>
          <p className="label">ВОЗМОЖНОСТИ</p>
          <ul>{capabilities.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <p className="label">ТЕХНОЛОГИИ</p>
          <div className="tags">{technologies.map(item => <span key={item}>{item}</span>)}</div>
        </div>
      </div>
    </section>

    <section className="build-section" id="build">
      <p className="eyebrow">ЧТО Я СОЗДАЮ</p>
      <h2>Что я могу автоматизировать</h2>
      <ul className="service-list">{services.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul>
    </section>

    <section className="contact" id="contact">
      <p className="eyebrow">КОНТАКТЫ</p>
      <h2>Давайте обсудим ваши процессы.</h2>
          <p>Для обсуждения проекта напишите на email или в Telegram.</p>
          <div className="contact-links">
            <a href="mailto:ilyasibragimov26@gmail.com">
              ilyasibragimov26@gmail.com
            </a>
            <a
              href="https://t.me/iliasicksicksick"
              target="_blank"
              rel="noreferrer"
            >
              @iliasicksicksick
            </a>
            <a
              href="https://github.com/iliasick"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
    </section>

    <footer>© {new Date().getFullYear()} Ilias</footer>
  </main>;
}
import Image from "next/image";
