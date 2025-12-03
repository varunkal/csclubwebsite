import { useEffect, useState } from 'react';
import { supabase, CalendarEvent } from '../lib/supabase';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';

export default function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const { data, error } = await supabase
        .from('calendar_events')
        .select('*')
        .order('event_date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  function formatTime(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  function getEventTypeColor(type: string) {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'competition':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'workshop':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'social':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-800">
            Stay updated with all our meetings, competitions, and workshops
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border-2 border-yellow-400 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CalendarIcon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getEventTypeColor(
                          event.event_type
                        )}`}
                      >
                        {event.event_type.charAt(0).toUpperCase() + event.event_type.slice(1)}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 ml-15">{event.description}</p>

                  <div className="flex flex-wrap gap-4 ml-15">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>
                        {formatDate(event.event_date)} at {formatTime(event.event_date)}
                      </span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-12 bg-yellow-50 border-2 border-yellow-400 rounded-xl">
            <CalendarIcon className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No upcoming events scheduled. Check back soon!</p>
          </div>
        )}

        <div className="mt-16 bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Weekly Meeting Schedule</h2>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Every Thursday</span> after school
            </p>
            <p className="text-gray-600">3:30 PM - 5:00 PM</p>
            <p className="text-gray-600">Room 234 (Computer Lab)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
