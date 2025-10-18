import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does theChecklist work?',
      answer:
        'theChecklist lets you swipe through curated places like restaurants and cafes. When you create a list and invite friends, everyone swipes independently. Our smart matching shows you only the places that everyone in your group has liked—making decisions instant and unanimous.',
    },
    {
      question: 'Is theChecklist free?',
      answer:
        'Yes! theChecklist is completely free to use. We\'re working on optional premium features for the future, but the core experience of discovering places and making group decisions will always be free.',
    },
    {
      question: 'How many people can join a list?',
      answer:
        'There\'s no limit! You can invite as many people as you want to any list. Whether it\'s just two friends deciding on dinner or a group of 20 planning a reunion, TheChecklist scales to your needs.',
    },
  ],
  [
    {
      question: 'Can I use theChecklist solo?',
      answer:
        'Absolutely! Even if you\'re not planning with a group, you can use theChecklist to save your favorite places and build your personal want-to-visit list. It\'s perfect for keeping track of recommendations.',
    },
    {
      question: 'What types of places are included?',
      answer:
        'We curate restaurants, cafes, bars, attractions, activities, and more. Our database includes everything from hidden gems to popular spots, with new places added regularly based on quality and user feedback.',
    },
    {
      question: 'How do you source places?',
      answer:
        'We pull from trusted sources like Google Maps, Yelp, and local guides, then curate the best options. We focus on quality over quantity, ensuring every place in our database is worth your time.',
    },
  ],
  [
    {
      question: 'Is my data private?',
      answer:
        'Yes. Your swipes are only shared with members of your lists—nobody else can see what you like or don\'t like. We take privacy seriously and never sell your data to third parties.',
    },
    {
      question: 'What platforms are supported?',
      answer:
        'theChecklist is available for iOS 13+ and Android 5+. You can download it from the App Store or Google Play Store. We\'re also working on a web version for desktop planning.',
    },
    {
      question: 'Can I export my lists?',
      answer:
        'List export functionality is coming soon as part of our premium tier. You\'ll be able to export matched places to your calendar, share them as itineraries, and more.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 bg-white py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:support@thechecklist.app"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm/6 text-gray-600">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
