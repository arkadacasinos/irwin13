import Image from 'next/image'
import { ArrowRight, Check, Crown, ShieldCheck, Sparkles } from 'lucide-react'

const keyTags = [
  '#irwincasino',
  '#irwincasinoофициальный',
  '#irwincasinoофициальныйсайт',
  '#irwincasinoзеркало',
  '#ирвинказино',
  '#ирвинказиноофициальный',
  '#ирвинказиноофициальныйсайт',
  '#ирвинказинозеркало',
  '#ирвинказинозеркалорабочее',
  '#irwincasinoиграть',
  '#ирвинказиноонлайн',
  '#ирвинказиноиграть',
]

export default function Page() {
  return (
    <main className="irwin13-shell">
      <header className="irwin13-header">
        <a className="irwin13-brand" href="#top" aria-label="Irwin Casino — на главную">
          <span className="irwin13-brand-mark" aria-hidden="true">◆</span>
          <span>Irwin Casino</span>
        </a>
        <nav className="irwin13-nav" aria-label="Основная навигация">
          <a href="#about">Обзор</a>
          <a href="#games">Игры</a>
          <a href="#mirror">Доступ</a>
        </nav>
        <a className="irwin13-header-cta" href="#start">Играть <ArrowRight size={15} aria-hidden="true" /></a>
      </header>

      <section className="irwin13-hero" id="top" aria-labelledby="hero-title">
        <div className="irwin13-hero-copy">
          <p className="irwin13-eyebrow"><Sparkles size={15} aria-hidden="true" /> Онлайн-казино для тех, кто ценит темп</p>
          <h1 id="hero-title">Irwin Casino — игра начинается с правильного выбора</h1>
          <p className="irwin13-lead">Откройте удобный вход в мир слотов, карточных столов и живых эмоций. Irwin Casino официальный сайт собран так, чтобы нужная игра находилась за пару касаний.</p>
          <div className="irwin13-actions" id="start">
            <a className="irwin13-primary" href="#games">Смотреть игры <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="irwin13-secondary" href="#mirror">Найти рабочий вход</a>
          </div>
          <ul className="irwin13-proof" aria-label="Преимущества">
            <li><Check size={16} aria-hidden="true" /> Мобильная версия</li>
            <li><Check size={16} aria-hidden="true" /> Понятная навигация</li>
            <li><Check size={16} aria-hidden="true" /> Ответственная игра</li>
          </ul>
        </div>
        <div className="irwin13-hero-art" aria-label="Карточный стол Irwin Casino">
          <Image src="/irwin-table.png" alt="Карточный стол с золотыми фишками" fill priority sizes="(max-width: 760px) 100vw, 48vw" />
          <div className="irwin13-art-label"><span>01</span><strong>Ваш стол<br />уже открыт</strong></div>
        </div>
      </section>

      <section className="irwin13-story" id="about" aria-labelledby="about-title">
        <div className="irwin13-section-heading">
          <p className="irwin13-kicker">Коротко о главном</p>
          <h2 id="about-title">Irwin Casino официальный сайт и Irwin Casino официальный</h2>
        </div>
        <div className="irwin13-story-text">
          <p>Если вы ищете Irwin Casino официальный сайт, ориентируйтесь на аккуратную страницу с понятным адресом и быстрым входом. Irwin Casino официальный предлагает привычный формат: выберите раздел, оцените условия и переходите к игре без лишних окон.</p>
          <p>Для нового игрока важны не громкие обещания, а прозрачность. Проверьте правила конкретного развлечения, лимиты и доступные способы пополнения. Так Irwin казино остаётся местом для отдыха, где решение принимается спокойно.</p>
        </div>
      </section>

      <section className="irwin13-feature-grid" id="games" aria-labelledby="games-title">
        <div className="irwin13-feature-copy">
          <p className="irwin13-kicker">Выбор без суеты</p>
          <h2 id="games-title">Irwin Casino играть, Ирвин казино играть и Ирвин казино онлайн</h2>
          <p>Когда хочется Irwin Casino играть, начните с каталога: быстрые слоты подойдут для короткой сессии, а карточные игры — для более размеренного темпа. Ирвин казино играть можно с телефона, а Ирвин казино онлайн сохраняет удобную структуру и на небольшом экране.</p>
          <div className="irwin13-mini-list">
            <div><Crown size={19} aria-hidden="true" /><span><strong>Слоты</strong><br />Динамичные раунды и разные механики.</span></div>
            <div><ShieldCheck size={19} aria-hidden="true" /><span><strong>Карточные игры</strong><br />Классика, где важны внимание и ритм.</span></div>
          </div>
        </div>
        <figure className="irwin13-mobile-art">
          <Image src="/irwin-mobile.png" alt="Смартфон с интерфейсом онлайн-игры" loading="lazy" fill sizes="(max-width: 760px) 100vw, 36vw" />
          <figcaption>Формат, который удобно брать с собой</figcaption>
        </figure>
      </section>

      <section className="irwin13-mirror" id="mirror" aria-labelledby="mirror-title">
        <div>
          <p className="irwin13-kicker">Доступ с телефона</p>
          <h2 id="mirror-title">Ирвин казино зеркало, Ирвин казино зеркало рабочее и Irwin Casino зеркало</h2>
        </div>
        <div className="irwin13-mirror-body">
          <p>Если основной адрес временно не открывается, используйте Ирвин казино зеркало или Irwin Casino зеркало из проверенного источника. Рабочее зеркало Ирвин казино зеркало рабочее должно вести на тот же знакомый интерфейс, а не на случайную копию.</p>
          <p>Сохраните актуальную ссылку в закладках и не вводите данные на страницах с подозрительными запросами. Перед стартом убедитесь, что соединение защищено, а игра остаётся развлечением с заранее выбранным бюджетом.</p>
          <a className="irwin13-text-link" href="#start">Перейти к началу <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="irwin13-final" aria-labelledby="final-title">
        <div>
          <p className="irwin13-kicker">Ваша следующая партия</p>
          <h2 id="final-title">Ирвин казино официальный сайт — простой старт онлайн</h2>
        </div>
        <a className="irwin13-primary" href="#games">Выбрать игру <ArrowRight size={18} aria-hidden="true" /></a>
      </section>

      <footer className="irwin13-footer">
        <div className="irwin13-footer-top">
          <a className="irwin13-brand" href="#top"><span className="irwin13-brand-mark" aria-hidden="true">◆</span><span>Irwin Casino</span></a>
          <p>Играйте осознанно. Только для совершеннолетних.</p>
        </div>
        <div className="irwin13-tags" aria-label="Поисковые фразы">
          {keyTags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <p className="irwin13-copyright">© 2026 Irwin Casino. Информация на странице носит ознакомительный характер.</p>
      </footer>
    </main>
  )
}

export const dynamic = 'force-static'
