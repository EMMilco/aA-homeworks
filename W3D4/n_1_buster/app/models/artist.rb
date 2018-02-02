class Artist < ApplicationRecord
  has_many :albums,
    class_name: 'Album',
    foreign_key: :artist_id,
    primary_key: :id

  def n_plus_one_tracks
    albums = self.albums
    tracks_count = {}
    albums.each do |album|
      tracks_count[album.title] = album.tracks.length
    end

    tracks_count
  end

  def better_tracks_query
    tracks_count = {}
    albums = self.albums
    .joins(:tracks)
    .select("albums.title, COUNT(*) as track_count")
    .group('albums.id')

    albums.each { |album_record| puts album_record.instance_variables}
    tracks_count

  end


end
