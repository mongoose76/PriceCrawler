/**
 * Created by mongoose on 1/27/2016.
 */
class TemplateFactory {

    public static get(siteID) {

        switch (siteID) {

            case 'pcgarage':
                return new Template_pcGarage();

            case 'emag':
                return new Template_eMag();

            case 'cel':
                return new Template_cel();
        }

    }
}
