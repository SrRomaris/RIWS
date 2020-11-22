package es.udc.muei.riws.services;

import java.util.List;


import org.springframework.data.domain.Page;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.SearchPage;
import org.springframework.stereotype.Service;

import es.udc.muei.riws.entities.Song;


public interface ISongService {
	
	public List<Song> getSongByFields(String artist, String title, String lyrics);

}
