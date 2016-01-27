import org.htmlcleaner.CleanerProperties
import org.htmlcleaner.DomSerializer
import org.htmlcleaner.HtmlCleaner
import org.htmlcleaner.TagNode
import org.w3c.dom.Document

/**
 * Created by mongoose on 1/27/2016.
 */

class ITemplate {

    def static cfg;

    public run() {
        // empty
    }

    /**
     * Get DOM of HMTL resource
     *
     * @return
     */
    public getDOM() {

        String fileContents = new File("c:\\workspace\\PriceCrawler\\res\\" + cfg.siteID + "\\" + cfg.file).text;

        // fetch and clean contents of URL
        // TagNode tagNode = new HtmlCleaner().clean(new URL(cfg.url));
        TagNode tagNode = new HtmlCleaner().clean(fileContents);

        // construct DOM
        final CleanerProperties props = new CleanerProperties();
        def Document doc = new DomSerializer(props).createDOM(tagNode);

        return doc;

    }
}
