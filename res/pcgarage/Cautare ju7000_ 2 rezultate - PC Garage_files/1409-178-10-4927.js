
      (function(){
        olark.extend('Sounds');
olark.extend('GoogleAnalytics');
olark.extend('Feedback');
olark.extend('CalloutBubble');
olark.extend('Cobrowsing');


        var isNewVersion = olark._ && olark._.versions && (olark._.versions.follow || olark._.versions.popout)
        if(isNewVersion) {
          olark._.finish({"system":{"allow_change_colors":true,"show_popout":0,"hashchange_events_trigger_page_change":0,"require_phone":0,"email_body_error_text":"You must complete all fields and specify a valid email address","disable_default_visitor_information":0,"operator_has_stopped_typing_text":"","allow_change_height":true,"allow_change_width":true,"require_offline_phone":0,"offline_message":"Niciun operator disponibil in acest moment, revenim imediat.","hide_not_available":1,"show_pre_chat":0,"feedback_survey_language":"en","habla_offline_sent_text":"Thanks for your message!  We'll get back to you shortly.","allow_mobile_boot":0,"habla_name_input_text":"\u003Cclick here\u003E and type your Name","say_text":"Scrie aici si apasa \u003Center\u003E","rules":[{"kind":"Rule","whenOnline":true,"description":"Activare chat","perVisit":true,"clause":{"clauses":[{"kind":"ContainsClause","right":"laptop","left":{"varname":"visitor.currentPage.url","kind":"VariableClause"}}],"kind":"OrClause"},"enabled":true,"actions":[{"kind":"Action","method":"api.box.expand","options":{}},{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Cauti un laptop? Eu pot sa te ajut."}}],"perPage":false,"perVisitor":false,"id":"1369838721377030817540063781834","whenOffline":false},{"kind":"Rule","whenOnline":true,"description":"Start a chat after a customer has viewed 6 pages, so I can engage without being too intrusive","perVisit":true,"clause":{"clauses":[{"kind":"EqualsClause","right":6,"left":{"varname":"visitor.pageCountForThisVisit","kind":"VariableClause"}}],"kind":"OrClause"},"enabled":false,"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Suntem online. Ai nevoie de ajutor?"}}],"perPage":false,"perVisitor":false,"id":2316,"whenOffline":false},{"kind":"Rule","whenOnline":true,"description":"Highlight returning visitors in my buddy list","perVisit":true,"clause":{"clauses":[{"kind":"GreaterThanClause","right":1,"left":{"varname":"visitor.visitCount","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":false,"actions":[{"kind":"Action","method":"api.chat.updateVisitorNickname","options":{"snippet":"Returning Visitor"}}],"perPage":false,"perVisitor":false,"id":2317,"whenOffline":false},{"kind":"Rule","whenOnline":true,"description":"Hide chat for visitors from Zimbabwe since we cannot ship to them.","perVisit":true,"clause":{"clauses":[{"kind":"EqualsClause","right":"ZW","left":{"varname":"visitor.countryCode","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":false,"actions":[{"kind":"Action","method":"api.box.hide","options":{}}],"perPage":false,"perVisitor":false,"id":2318,"whenOffline":false},{"kind":"Rule","whenOnline":true,"description":"Target my French visitors by sending a custom message in their language","perVisit":true,"clause":{"clauses":[{"kind":"EqualsClause","right":"FR","left":{"varname":"visitor.countryCode","kind":"VariableClause"}}],"kind":"AndClause"},"enabled":false,"actions":[{"kind":"Action","method":"api.chat.sendMessageToVisitor","options":{"body":"Bonjour, Comment allez-vous?"}}],"perPage":false,"perVisitor":false,"id":"13698386989140","whenOffline":false}],"disable_extra_br":true,"right_margin":20,"bottom_margin":0,"allowed_domains":"","start_expanded":0,"habla_offline_email_text":"\u003Cclick here\u003E and type your Email","inline_css_url":"static.olark.com/css/d/e/de8b8e79b0d31c337cc408afae0e849d.css","pre_chat_error_text":"Please enter your name and email in case we get disconnected.","require_email":2,"close_hides_window":0,"popout_css_url":"static.olark.com/css/4/4/4442e6b8cfdfcbb5c9b3031a5ba14c29.css","disable_width":true,"top_margin":0,"habla_offline_body_text":"We're not around but we still want to hear from you!  Leave us a note:","expandOnMessageReceived":0,"expandOnFirstMessageReceived":1,"not_available_text":"Ai intrebari? Pot sa te ajut.","welcome_msg":"Bine ai venit la PC Garage. Cu ce pot sa te ajut?","start_hidden":0,"habla_offline_phone_text":"\u003Cclick here\u003E and type your Phone","disable_offline_messaging_fallback":true,"offline_msg_mode":0,"height":150,"inline_css_url_quirks":"static.olark.com/css/6/c/6cea4edbf286ca9b17bbe24551dcbd80.css","inline_css_url_ie":"static.olark.com/css/e/9/e97e86eb462e115b8860e67f5b15f64e.css","ended_chat_message":"Aceasta conversatie s-a incheiat. Ne puteti scrie din nou daca mai aveti nevoie de ajutor. Multumim.","pre_chat_submit":"Click here to start chatting","require_name":2,"in_chat_text":"Conversatia este deschisa","pre_chat_message":"Hi, I am around, click 'start chatting' to contact me.","branding":"whitelabel","habla_offline_submit_value":"Send","operator_is_typing_text":"Mesaj in curs de redactare...","before_chat_text":"Suntem online. Ai nevoie de ajutor?","left_margin":20,"width":420,"corner_position":"BR","right_to_left":false,"disableJSStyles":false,"show_in_buddy_list":"chatting","hkey":"PHNwYW4gc3R5bGU9ImRpc3BsYXk6bm9uZSI+PGEgaWQ9ImhibGluazkiPjwvYT5odHRwOi8vd3d3Lm9sYXJrLmNvbTwvc3Bhbj4=","md5":"a340e662923466ebc6835d63675f85a2","site_id":"1409-178-10-4927","template":"azul","operators":{"768975":{"avatar_url":"//static.olark.com/imageservice/cdb1786ef0b0a6377f11e60df045a210.png"},"709479":{"avatar_url":"//static.olark.com/imageservice/323d0cf6cb6c35244fed02145ba9057c.png"},"769258":{"avatar_url":"//static.olark.com/imageservice/26547a8542382336ddfbf5fb432e5908.png"},"653577":{"avatar_url":"//static.olark.com/imageservice/88da53ea37b556c8433ccd255f156a9b.png"},"709482":{"avatar_url":"//static.olark.com/imageservice/833fa0798b54cc3399ab9b2b716c7891.png"},"712383":{"avatar_url":"//static.olark.com/imageservice/9e9e29f4b1516d958e12bef2be8021c8.png"},"709481":{"avatar_url":"//static.olark.com/imageservice/83c8626233d1e5ac8ca266e1640aadb3.png"},"653576":{"avatar_url":"//static.olark.com/imageservice/cdbfd4cd1d7b74e84ad9ef2bb5f7d8eb.png"},"709480":{"avatar_url":"//static.olark.com/imageservice/565af4b71c1dbeac4ae688493b94dbe7.png"}}},"Sounds":{"enabled":true},"GoogleAnalytics":{"create_custom_tracker":false,"enabled":true,"enable_custom_variables":true,"had_conversation_page_slot_number":5,"load_ga_if_missing":false,"had_conversation_session_slot_number":5,"had_conversation_visitor_slot_number":2,"allow_linker":false,"track_chat_start_page":false},"Feedback":{"enabled":true},"CalloutBubble":{"bubble_width":"211px","bubble_image_url":"http://static.olark.com/imageservice/929bcfaf4062f3c43154c36f50a96a32.png","enabled":true,"bubble_height":"76px","slide":false},"locale":{"cobrowsing_visitor_confirm_allow_button_start":"Da","feedback_survey_question_additional_feedback_text":"Additional Feedback.","feedback_survey_question_operator_speed_text":"How responsive was the chat agent?","feedback_survey_question_operator_speed_high":"Extremely responsive","cobrowsing_notify_visitor_control_text":"Operatorul controleaza acum browserul tau","feedback_survey_submission_error_message":"There was an error submitting your answer, please try again.","feedback_survey_button_finish":"Finish","feedback_survey_button_next":"Next","feedback_survey_question_operator_intelligence_high":"Extremely knowledgeable","feedback_survey_question_operator_intelligence_text":"How knowledgeable was the chat agent?","cobrowsing_visitor_confirm_allow_message":"Doresti sa permiti accesul la browser?","cobrowsing_notify_visitor_end_text":"Accesul s-a oprit","feedback_survey_button_submitting":"Submitting","feedback_survey_question_operator_attitude_high":"Extremely friendly","cobrowsing_visitor_allow_approve_message":"Operatorul are acces la browserul tau","feedback_survey_question_operator_speed_low":"Not at all responsive","feedback_survey_question_operator_attitude_low":"Not at all friendly","feedback_survey_question_operator_intelligence_low":"Not at all knowledgeable","feedback_survey_end_message":"Thank you for your feedback :)","cobrowsing_allow_approve_button_stop":"Opreste accesul","cobrowsing_visitor_confirm_allow_button_decline":"Nu","feedback_survey_question_chat_high":"Extremely satisfied","feedback_survey_question_1_text":"Question 1 of 5","feedback_survey_question_chat_low":"Not at all satisfied","feedback_survey_question_4_text":"Question 4 of 5","feedback_survey_question_3_text":"Question 3 of 5","feedback_survey_question_5_text":"Question 5 of 5","cobrowsing_visitor_decline_text":"Acces respins","cobrowsing_confirm_control_text":"Doresti sa permiti accesul la browser?","feedback_survey_question_2_text":"Question 2 of 5","feedback_survey_question_chat_text":"How satisfied were you with this chat?","feedback_survey_question_operator_attitude_text":"How friendly was the chat agent?"},"Cobrowsing":{"enabled":true},"invalidate_cache":{}});
        }else{
          olark.configure(function(conf){
            conf.system.site_id="1409-178-10-4927";
          });
          olark._.finish();
        }
      })();
    