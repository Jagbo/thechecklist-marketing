'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const testimonials = [
  {
    title: 'Perfect for weekend plans',
    body: 'My friends and I created a list for Saturday night. Within minutes, we found 5 restaurants we all wanted to try. Picked one in 30 seconds flat.',
    author: 'Sarah M.',
    rating: 5,
  },
  {
    title: 'Travel planning made easy',
    body: 'Planning a trip to NYC with my family. Everyone swiped on attractions ahead of time. Our itinerary basically built itself!',
    author: 'Michael Chen',
    rating: 5,
  },
  {
    title: 'Date night savior',
    body: 'My partner and I have a "Date Night" list. We both add places we like, and pull from the matches when we\'re free. No more decision stress.',
    author: 'Jessica R.',
    rating: 5,
  },
  {
    title: 'Team lunch hero',
    body: 'Our office uses TheChecklist for team lunches. 12 people, zero drama. The matched places are always winners.',
    author: 'David K.',
    rating: 5,
  },
    {
      title: 'Actually useful',
      body: 'I\'ve tried so many apps for planning with friends. theChecklist is the first one that actually solves the problem. No more endless group chats!',
      author: 'Emma L.',
      rating: 5,
    },
  {
    title: 'Saves so much time',
    body: 'Used to spend hours debating where to eat. Now it takes literally 5 minutes to find a place everyone loves. Game changer.',
    author: 'Ryan P.',
    rating: 5,
  },
  {
    title: 'Simple and brilliant',
    body: 'The concept is so simple but so effective. Swipe, match, done. Why didn\'t someone make this sooner?',
    author: 'Amanda T.',
    rating: 5,
  },
  {
    title: 'Foodie group approved',
    body: 'My foodie friends are PICKY. This app somehow gets us all to agree on restaurants. It\'s borderline miraculous.',
    author: 'Chris V.',
    rating: 5,
  },
  {
    title: 'No more compromising',
    body: 'Finally, a way to find places everyone actually wants to go—not just places we settle on. Makes every outing better.',
    author: 'Nicole B.',
    rating: 5,
  },
  {
    title: 'Family reunion planner',
    body: 'Used this for our family reunion with 20+ people. Found activities everyone could agree on. Saved our sanity.',
    author: 'James H.',
    rating: 5,
  },
  {
    title: 'Clean and intuitive',
    body: 'The app is beautiful and so easy to use. My 60-year-old mom figured it out in seconds. That\'s saying something!',
    author: 'Lauren S.',
    rating: 5,
  },
  {
    title: 'Couples counseling',
    body: 'My girlfriend and I used to fight about where to eat. Now we just check our matched places. Relationship saver, honestly.',
    author: 'Alex M.',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-brand-accent' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Testimonial({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold">
          &ldquo;{title}&rdquo;
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600">
        &mdash; {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function TestimonialColumn({ testimonials, className, testimonialClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {testimonials.concat(testimonials).map((testimonial, testimonialIndex) => (
        <Testimonial
          key={testimonialIndex}
          aria-hidden={testimonialIndex >= testimonials.length}
          className={testimonialClassName?.(testimonialIndex % testimonials.length)}
          {...testimonial}
        />
      ))}
    </div>
  )
}

function TestimonialGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(testimonials, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <TestimonialColumn
            testimonials={[...column1, ...column3.flat(), ...column2]}
            testimonialClassName={(testimonialIndex) =>
              clsx(
                testimonialIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                testimonialIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <TestimonialColumn
            testimonials={[...column2, ...column3[1]]}
            className="hidden md:block"
            testimonialClassName={(testimonialIndex) =>
              testimonialIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <TestimonialColumn
            testimonials={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-gray-50 pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="testimonials-title"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-center sm:text-4xl"
        >
          Loved by Groups Everywhere
        </h2>
        <p className="mt-4 text-lg text-gray-600 sm:text-center">
          Real people using TheChecklist to make better decisions together.
        </p>
        <TestimonialGrid />
      </Container>
    </section>
  )
}

