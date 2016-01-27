/**
 * Created by mongoose on 1/27/2016.
 */
class TemplateFactory {

    public static get(siteID, search_keyword) {

        switch (siteID) {

            case 'pcgarage':
                return new Template_pcGarage(search_keyword);

            case 'emag':
                return new Template_eMag(search_keyword);

            case 'cel':
                return new Template_cel(search_keyword);
        }

    }
}
