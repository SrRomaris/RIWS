import scrapy
import os.path
import json


class QuotesSpider(scrapy.Spider):
    name = "quotes"

    songs_Info = []

    start_urls = [
        'https://www.letras.com/mais-acessadas/'
    ]

    def parse(self, response):
        save_path = '../Docs'
        filename='Songs'
        links = response.css('ol.top-list_mus a::attr(href)').getall()
        for link in links :
            yield response.follow(link, callback = self.parseSong)
        filePathNameWExt = save_path + '/' + filename + '.json'
        with open(filePathNameWExt, 'w') as fp:
            fp.write(json.dumps(self.songs_Info, indent=4, sort_keys=True))
            
    def parseSong(self, response):
        content = {}
        content['title']=response.css('h1::text').get()
        content['artistImage']=response.css('h2 a img::attr(src)').get()
        content['relevance']=response.css('div.cnt-info_exib b::text').get()
        content['artist']=response.css('h2 a span::text').get()
        content['lyrics']="#".join(response.css('div.cnt-letra p::text').getall())
        self.songs_Info.append(content)
        