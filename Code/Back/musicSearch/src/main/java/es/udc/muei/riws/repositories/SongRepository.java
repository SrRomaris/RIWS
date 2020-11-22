package es.udc.muei.riws.repositories;

import java.util.List;
import java.util.Optional;

import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.stereotype.Repository;
import es.udc.muei.riws.entities.Song;
@Repository
public class SongRepository implements ISongsRepository  {
	
	@Autowired
	private ElasticsearchOperations elasticSearchOperations;

	@Override
	public SearchHits<Song> findByArtistLikeAndTitleLikeAndLyricsLike(String artist, String title, String lyrics) {
		BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
		BoolQueryBuilder artistQueryBuilder = QueryBuilders.boolQuery();
		BoolQueryBuilder titleQueryBuilder = QueryBuilders.boolQuery();
		BoolQueryBuilder lyricsQueryBuilder = QueryBuilders.boolQuery();
		

		if(artist != "" && artist != null) {
			artistQueryBuilder.should(QueryBuilders.matchQuery("artist", artist));
			artistQueryBuilder.should(QueryBuilders.prefixQuery("artist", artist));
		}
		if(title != "" && title != null) {
			titleQueryBuilder.should(QueryBuilders.matchPhraseQuery("title", title));
			titleQueryBuilder.should(QueryBuilders.prefixQuery("title", title));}
		
		if(lyrics != "" && lyrics != null) {
			lyricsQueryBuilder.should(QueryBuilders.matchPhraseQuery("lyrics", lyrics));
			lyricsQueryBuilder.should(QueryBuilders.prefixQuery("lyrics", lyrics));
		}
		
		boolQueryBuilder.must(artistQueryBuilder);
		boolQueryBuilder.must(titleQueryBuilder);
		boolQueryBuilder.must(lyricsQueryBuilder);
		
		NativeSearchQueryBuilder searchQueryBuilder = new NativeSearchQueryBuilder().withQuery(boolQueryBuilder);
		SearchHits<Song> songHits = elasticSearchOperations.search(searchQueryBuilder.build(), Song.class);
			
	
		return songHits;
	}


}
