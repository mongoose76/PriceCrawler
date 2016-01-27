import javax.xml.xpath.XPath
import javax.xml.xpath.XPathConstants
import javax.xml.xpath.XPathFactory

/**
 * Created by mongoose on 1/27/2016.
 */
class Template_cel extends ITemplate {

    public Template_cel() {

        cfg = [
                siteID: 'cel',
                url : 'http://www.cel.ro/cauta/ju7000/1/1',
                file: 'ju7000.html',
                xpath: '//*[@id="bodycode"]/table/tbody/tr[4]/td/div/div[2]/div[2]/div[2]/h2/a'
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
