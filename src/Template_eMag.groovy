import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants
import javax.xml.xpath.XPathFactory

/**
 * Created by mongoose on 1/27/2016.
 */
class Template_eMag extends ITemplate {

    public Template_eMag() {

        cfg = [
                siteID: 'emag',
                url : 'http://www.emag.ro/search/samsung%20ju7000',
                file: 'ju7000 - cautare - eMAG.ro.html',
                xpath: '//*[@id="products-holder"]/div[2]/form/h2/a'
        ]
    }

    @Override
    def run() {

        def doc = getDOM();

        // use xpath to find element
        def XPath xpath = XPathFactory.newInstance().newXPath();
        def String str = (String) xpath.evaluate(cfg.xpath, doc, XPathConstants.STRING);

        return str;
    }
}
