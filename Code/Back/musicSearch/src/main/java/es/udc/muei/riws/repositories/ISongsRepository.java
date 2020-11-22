package es.udc.muei.riws.repositories;



import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import es.udc.muei.riws.entities.Song;

@Repository
public interface ISongsRepository  {
	
	SearchHits<Song> findByArtistLikeAndTitleLikeAndLyricsLike(String name, String title, String lyrics);
	
	


}
