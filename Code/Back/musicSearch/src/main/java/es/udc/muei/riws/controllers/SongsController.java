package es.udc.muei.riws.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.elasticsearch.core.SearchHits;
import org.springframework.data.elasticsearch.core.SearchPage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import es.udc.muei.riws.entities.Song;
import es.udc.muei.riws.repositories.ISongsRepository;
import es.udc.muei.riws.services.ISongService;
import es.udc.muei.riws.services.SongService;

@RestController

public class SongsController {
	@Autowired
	private ISongService songService;

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/songs")
	List<Song> getSongs(@RequestParam(required=false) String artist, @RequestParam(required=false) String title,@RequestParam(required=false) String lyrics, @RequestParam(required=false) String relevancy) {

		return songService.getSongByFields(artist, title,lyrics);
	}

}
