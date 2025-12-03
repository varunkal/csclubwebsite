import { useEffect, useState } from 'react';
import { supabase, TeamMember } from '../lib/supabase';
import { User } from 'lucide-react';

export default function Team() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  async function fetchTeamMembers() {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setMembers(data || []);
    } catch (error) {
      console.error('Error fetching team members:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-800">
            The leaders driving innovation and excellence at Metea Valley CS Club
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white border-2 border-yellow-400 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-yellow-400 h-32 flex items-center justify-center">
                {member.image_url ? (
                  <img
                    src={member.image_url}
                    alt={member.name}
                    className="w-24 h-24 rounded-full border-4 border-white object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full border-4 border-white bg-black flex items-center justify-center">
                    <User className="w-12 h-12 text-yellow-400" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-1">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.grade}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {members.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No team members found. Check back soon!</p>
          </div>
        )}

        <div className="mt-16 bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-lg text-gray-700 mb-6">
            We're always looking for passionate students to join our leadership team and help grow
            the CS community at Metea Valley!
          </p>
          <div className="inline-block bg-black text-yellow-400 px-8 py-3 rounded-lg font-semibold">
            Applications Open Each Spring
          </div>
        </div>
      </div>
    </div>
  );
}
