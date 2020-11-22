package es.udc.muei.riws.services;

import java.util.List;

import org.elasticsearch.common.unit.Fuzziness;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.stereotype.Service;
import es.udc.muei.riws.entities.Song;
import es.udc.muei.riws.repositories.ISongsRepository;
@Service
public class SongService implements ISongService {
	
	@Autowired
	private ISongsRepository songsRepository;
	

	

	public List<Song> getSongByFields(String artist, String title , String lyrics) {
		SearchHits<Song> songHits = songsRepository.findByArtistLikeAndTitleLikeAndLyricsLike(artist, title, lyrics);
		List<Song> songs = songHits.map(songHit -> songHit.getContent()).toList();
	
		return songs;
	}


}
