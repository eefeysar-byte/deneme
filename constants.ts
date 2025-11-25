import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'anayasa',
    name: 'Anayasa Hukuku',
    description: 'Devletin temel nitelikleri, organları ve temel haklar.',
    icon: 'scale',
    notes: [
      {
        id: 'anayasa-1',
        title: 'Normlar Hiyerarşisi',
        summary: 'Hukuk kurallarının ast-üst ilişkisi ve geçerlilik şartları.',
        date: '10 Ekim 2023',
        tags: ['Temel Kavramlar', 'Kelsen'],
        content: `
          <h3 class="text-xl font-bold mb-3 text-legal-800">Giriş</h3>
          <p class="mb-4">Hukuk düzeni, rastgele bir araya gelmiş kurallar topluluğu değildir. Kendi içinde tutarlı bir sistemdir. Bu sistemi sağlayan temel ilke <strong>Normlar Hiyerarşisi</strong> (Hukuk Kademelenmesi) ilkesidir. Hans Kelsen tarafından teorize edilmiştir.</p>
          
          <h3 class="text-xl font-bold mb-3 text-legal-800">Hiyerarşik Sıralama</h3>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Anayasa:</strong> En üst normdur. Kanunlar Anayasaya aykırı olamaz.</li>
            <li><strong>Milletlerarası Antlaşmalar:</strong> Temel hak ve özgürlüklere ilişkin olanlar kanunların üzerindedir.</li>
            <li><strong>Kanunlar (Yasalar):</strong> TBMM tarafından çıkarılır.</li>
            <li><strong>Cumhurbaşkanlığı Kararnameleri:</strong> Yürütme yetkisine dayanır.</li>
            <li><strong>Yönetmelikler:</strong> Kanunların uygulanmasını göstermek için çıkarılır.</li>
            <li><strong>Genelge ve Diğer Adsız Düzenleyici İşlemler.</strong></li>
          </ul>

          <h3 class="text-xl font-bold mb-3 text-legal-800">Önemli İlkeler</h3>
          <p class="mb-4">Alt basamakta yer alan bir norm, üst basamaktaki norma aykırı olamaz. Aykırılık durumunda, üst normun dediği geçerlidir veya alt norm iptal edilir (Anayasa Mahkemesi veya Danıştay denetimi ile).</p>
        `
      },
      {
        id: 'anayasa-2',
        title: 'Temel Hak ve Hürriyetlerin Sınırlanması',
        summary: 'Anayasa Madde 13 çerçevesinde sınırlama rejimi.',
        date: '15 Ekim 2023',
        tags: ['Madde 13', 'Ölçülülük'],
        content: `
          <h3 class="text-xl font-bold mb-3 text-legal-800">Anayasa Madde 13</h3>
          <p class="mb-4">Temel hak ve hürriyetler, özlerine dokunulmaksızın yalnızca Anayasanın ilgili maddelerinde belirtilen sebeplere bağlı olarak ve ancak kanunla sınırlanabilir.</p>

          <h3 class="text-xl font-bold mb-3 text-legal-800">Sınırlama Ölçütleri</h3>
          <ol class="list-decimal pl-5 mb-4 space-y-2">
            <li><strong>Kanunilik İlkesi:</strong> Sınırlama mutlaka kanunla yapılmalıdır (veya OHAL dönemlerinde CBK ile).</li>
            <li><strong>Özel Sınırlama Sebebi:</strong> Anayasanın ilgili maddesinde o hak için özel bir sebep yazılmış olmalıdır.</li>
            <li><strong>Ölçülülük İlkesi:</strong> Sınırlama, ulaşılmak istenen amaçla orantılı olmalıdır (Elverişlilik, Gereklilik, Orantılılık).</li>
            <li><strong>Demokratik Toplum Düzenine Uygunluk:</strong> Çağdaş demokrasilerin gereklerine aykırı olmamalıdır.</li>
            <li><strong>Laik Cumhuriyet Gereklerine Uygunluk.</strong></li>
            <li><strong>Hakkın Özüne Dokunmama:</strong> Hakkı kullanılamaz hale getirmemelidir.</li>
          </ol>
        `
      }
    ]
  },
  {
    id: 'medeni',
    name: 'Medeni Hukuk',
    description: 'Kişiler, aile, miras, eşya ve borçlar hukuku.',
    icon: 'user',
    notes: [
      {
        id: 'medeni-1',
        title: 'Dürüstlük Kuralı ve İyiniyet',
        summary: 'TMK Madde 2 ve Madde 3 arasındaki farklar ve uygulama alanları.',
        date: '20 Ekim 2023',
        tags: ['TMK Md. 2', 'TMK Md. 3', 'Başlangıç Hükümleri'],
        content: `
          <h3 class="text-xl font-bold mb-3 text-legal-800">Dürüstlük Kuralı (Objektif İyiniyet) - TMK m.2</h3>
          <p class="mb-4">Herkes, haklarını kullanırken ve borçlarını yerine getirirken dürüstlük kurallarına uymak zorundadır. Bir hakkın açıkça kötüye kullanılmasını hukuk düzeni korumaz.</p>
          <p class="italic mb-4 text-gray-600">Örnek: Borcunu ödemek için alacaklının en sıkışık anını bekleyip, zarar vermek kastıyla hareket etmek.</p>

          <h3 class="text-xl font-bold mb-3 text-legal-800">İyiniyet (Subjektif İyiniyet) - TMK m.3</h3>
          <p class="mb-4">Kanunun iyiniyete hukuki bir sonuç bağladığı durumlarda, asıl olan iyiniyetin varlığıdır. Ancak, durumun gereklerine göre kendisinden beklenen özeni göstermeyen kimse iyiniyet iddiasında bulunamaz.</p>
          <p class="mb-4">İyiniyet genellikle <strong>hak kazanımında</strong> rol oynar (Örneğin: Emin sıfatıyla zilyetten mal iktisabı).</p>
        `
      },
      {
        id: 'medeni-2',
        title: 'Kişiliğin Başlangıcı ve Sona Ermesi',
        summary: 'Tam ve sağ doğum, ölüm karinesi ve gaiplik.',
        date: '22 Ekim 2023',
        tags: ['Kişiler Hukuku', 'Tam ve Sağ Doğum'],
        content: `
          <h3 class="text-xl font-bold mb-3 text-legal-800">Kişiliğin Başlangıcı</h3>
          <p class="mb-4">Kişilik, çocuğun <strong>sağ</strong> olarak <strong>tamamıyla</strong> doğduğu anda başlar ve ölümle sona erer (TMK m.28). Çocuk hak ehliyetini, sağ doğmak koşuluyla, ana rahmine düştüğü andan başlayarak elde eder.</p>

          <h3 class="text-xl font-bold mb-3 text-legal-800">Ölüm ve Gaiplik</h3>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Ölüm Karinesi:</strong> Ölümüne kesin gözle bakılacak bir durumda kaybolan ve cesedi bulunamayan kişi hukuken ölmüş sayılır. Mahkeme kararına gerek yoktur, kütüğe ölü kaydı düşülür.</li>
            <li><strong>Gaiplik:</strong> Ölüm tehlikesi içinde kaybolma (1 yıl bekleme) veya uzun süredir haber alınamama (5 yıl bekleme) durumunda mahkeme kararıyla kişiliğin sona erdirilmesidir.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'ceza',
    name: 'Ceza Hukuku',
    description: 'Suçlar, cezalar ve ceza sorumluluğunun esasları.',
    icon: 'gavel',
    notes: [
      {
        id: 'ceza-1',
        title: 'Suçun Unsurları',
        summary: 'Maddi unsur, manevi unsur ve hukuka aykırılık.',
        date: '01 Kasım 2023',
        tags: ['Genel Hükümler', 'Kast', 'Taksir'],
        content: `
          <h3 class="text-xl font-bold mb-3 text-legal-800">1. Maddi Unsur (Tipiklik)</h3>
          <p class="mb-4">Fiil, netice ve illiyet bağını kapsar. Kanunda tanımlanan suç tipine uygun bir eylemin varlığı gerekir.</p>

          <h3 class="text-xl font-bold mb-3 text-legal-800">2. Manevi Unsur</h3>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Kast:</strong> Suçun kanuni tanımındaki unsurların bilerek ve istenerek gerçekleştirilmesidir.</li>
            <li><strong>Olası Kast:</strong> Kişinin, suçun kanuni tanımındaki unsurların gerçekleşebileceğini öngörmesine rağmen fiili işlemesidir ("Olursa olsun").</li>
            <li><strong>Taksir:</strong> Dikkat ve özen yükümlülüğüne aykırılık dolayısıyla, suçun kanuni tanımındaki unsurların gerçekleşmesinin öngörülmeyerek fiilin işlenmesidir.</li>
          </ul>

          <h3 class="text-xl font-bold mb-3 text-legal-800">3. Hukuka Aykırılık</h3>
          <p class="mb-4">Fiilin hukuk düzeniyle çatışmasıdır. Meşru müdafaa, kanun hükmünün ifası gibi hukuka uygunluk nedenleri varsa suç oluşmaz.</p>
        `
      }
    ]
  },
  {
    id: 'idare',
    name: 'İdare Hukuku',
    description: 'İdarenin kuruluşu, eylemleri ve denetimi.',
    icon: 'building',
    notes: [
      {
        id: 'idare-1',
        title: 'İdari İşlemin Unsurları',
        summary: 'Yetki, şekil, sebep, konu ve amaç unsurları.',
        date: '05 Kasım 2023',
        tags: ['İptal Davası', 'Sakatlık'],
        content: `
          <h3 class="text-xl font-bold mb-3 text-legal-800">Sakatlık Sebepleri</h3>
          <p class="mb-4">Bir idari işlem, aşağıdaki 5 unsurdan biri yönünden hukuka aykırı ise iptal edilebilir:</p>
          <ol class="list-decimal pl-5 mb-4 space-y-2">
            <li><strong>Yetki:</strong> İşlemi yapan makamın kanunen o işlemi yapmaya yetkili olması (Kişi, konu, yer, zaman bakımından).</li>
            <li><strong>Şekil:</strong> İşlemin kanunda öngörülen usul ve formalitelere uygun yapılması.</li>
            <li><strong>Sebep:</strong> İdareyi işlem yapmaya sevk eden hukuki veya fiili etken.</li>
            <li><strong>Konu:</strong> İşlemin doğurduğu hukuki sonuç. (Örn: Memurun görevden uzaklaştırılması). Konu imkansız veya hukuka aykırı olmamalıdır.</li>
            <li><strong>Amaç:</strong> Her idari işlemin nihai amacı "Kamu Yararı"dır. Kişisel kin veya siyasi saiklerle yapılan işlemler amaç yönünden sakattır.</li>
          </ol>
        `
      }
    ]
  }
];