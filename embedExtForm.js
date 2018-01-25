document.querySelector("#insertForm").innerHTML = 
`
<link href="https://codepen.io/connecthedots/pen/LeMVpM.css" rel="stylesheet" type="text/css">
<script src="https://codepen.io/connecthedots/pen/LeMVpM.js"></script>
    <!-- Change or deletion of the name attributes in the input tag will lead to empty values on record submission-->
    <div class="zf-templateWidth">
        <form action='https://forms.zohopublic.com/breakoutiq1/form/QuestInquiryFormTest/formperma/7jI9sCxnrc90IXxtf8qtVT3OhDRWwpZiZLejN2WuJis/htmlRecords/submit' name='form' method='POST' onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();' accept-charset='UTF-8' enctype='multipart/form-data' id='form'><input type="hidden" name="zf_referrer_name" value="">
            <!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->
            <input type="hidden" name="zf_redirect_url" value="https://www.breakoutiq.com/thanks-for-inquiring">
            <!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->
            <div class="zf-templateWrapper">
                <!---------template Header Starts Here---------->
                <ul class="zf-tempHeadBdr">
                    <li class="zf-tempHeadContBdr">
                        <h2 class="zf-frmTitle"><em>Quest Inquiry Form - Test</em></h2>
                        <p class="zf-frmDesc"></p>
                        <div class="zf-clearBoth"></div>
                    </li>
                </ul>
                <!---------template Header Ends Here---------->
                <!---------template Container Starts Here---------->
                <div class="zf-subContWrap zf-rightAlign">
                    <ul>
                        <!---------HIDDEN Single Line Starts Here---------->
                        <li class="zf-tempFrmWrapper zf-small" style="display:none" ><label class="zf-labelName">Tracking ID
</label>
                            <div class="zf-tempContDiv"><span> 
<input type="text" name="SingleLine5" checktype="c1" value="" maxlength="255" invlovedinsalesiq=false /> </span>
                                <p id="SingleLine_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
                            </div>
                            <div class="zf-clearBoth"></div>
                        </li>
                        <!---------Single Line Ends Here---------->
                        <!---------Single Line Starts Here---------->
                        <li class="zf-tempFrmWrapper zf-small"><label class="zf-labelName">Name 
    <em class="zf-important">*</em>
    </label>
                            <div class="zf-tempContDiv"><span> 
<input type="text" name="SingleLine" checktype="c1" value="" maxlength="255" invlovedinsalesiq=false /> </span>
                                <p id="SingleLine_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
                            </div>
                            <div class="zf-clearBoth"></div>
                        </li>
                        <!---------Single Line Ends Here---------->
                        <!---------Email Starts Here---------->
                        <li class="zf-tempFrmWrapper zf-small"><label class="zf-labelName">Email 
<em class="zf-important">*</em>
</label>
                            <div class="zf-tempContDiv"><span> <input fieldType=9 invlovedinsalesiq=false type="text" maxlength="255" name="Email" checktype="c5" value=""/></span>
                                <p id="Email_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
                            </div>
                            <div class="zf-clearBoth"></div>
                        </li>
                        <!---------Email Ends Here---------->
                        <!---------Phone Starts Here---------->
                        <li class="zf-tempFrmWrapper zf-phone small"><label class="zf-labelName">Phone
</label>
                            <div class="zf-tempContDiv">
                                <div>
                                    <input invlovedinsalesiq=false type="text" name="PhoneNumber_countrycode" compname="PhoneNumber" checktype="c7" phoneFormat="1" maxlength="20" value="" id="international_PhoneNumber_countrycode" fieldType="11" />
                                    <div class="zf-clearBoth"></div>
                                </div>
                                <p id="PhoneNumber_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
                            </div>
                            <div class="zf-clearBoth"></div>
                        </li>
                        <!---------Phone Ends Here---------->
                        <!---------Single Line Starts Here---------->
                        <li class="zf-tempFrmWrapper zf-small"><label class="zf-labelName">Estimated Group Size 
<em class="zf-important">*</em>
</label>
                            <div class="zf-tempContDiv"><span> 
<input type="text" name="SingleLine1" checktype="c1" value="" maxlength="255" invlovedinsalesiq=false /> </span>
                                <p id="SingleLine1_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
                            </div>
                            <div class="zf-clearBoth"></div>
                        </li>
                        <!---------Single Line Ends Here---------->
                        <!---------Single Line Starts Here---------->
                        <li class="zf-tempFrmWrapper zf-small"><label class="zf-labelName">Preferred Dates and Times 
<em class="zf-important">*</em>
</label>
                            <div class="zf-tempContDiv"><span> 
<input type="text" name="SingleLine2" checktype="c1" value="" maxlength="255" invlovedinsalesiq=false /> </span>
                                <p id="SingleLine2_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
                                <p class="zf-instruction">(e.g., 3/9 - 5 - 8pm | '2nd week of March')</p>
                            </div>
                            <div class="zf-clearBoth"></div>
                        </li>
                        <!---------Single Line Ends Here---------->
                        <!---------Single Line Starts Here---------->
                        <li class="zf-tempFrmWrapper zf-small"><label class="zf-labelName">Budget 
</label>
                            <div class="zf-tempContDiv"><span> 
<input type="text" name="SingleLine3" checktype="c1" value="" maxlength="255" invlovedinsalesiq=false /> </span>
                                <p id="SingleLine3_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
                                <p class="zf-instruction">Per person or total</p>
                            </div>
                            <div class="zf-clearBoth"></div>
                        </li>
                        <!---------Single Line Ends Here---------->
                        <!---------Multiple Line Starts Here---------->
                        <li class="zf-tempFrmWrapper zf-small"><label class="zf-labelName">Additional Questions / Comments 
</label>
                            <div class="zf-tempContDiv"><span> <textarea name="MultiLine" checktype="c1" maxlength="65535"></textarea> </span>
                                <p id="MultiLine_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
                                <p class="zf-instruction">Let us know if you have any specific requests, special needs (e.g., accessibility) - we'll do our best to accommodate!</p>
                            </div>
                            <div class="zf-clearBoth"></div>
                        </li>
                        <!---------Multiple Line Ends Here---------->
                        <!---------Dropdown Starts Here---------->
                        <li class="zf-tempFrmWrapper zf-small"><label class="zf-labelName">How'd You Hear About Us?
</label>
                            <div class="zf-tempContDiv"><select class="zf-form-sBox" name="Dropdown" checktype="c1"><option selected="true" value="-Select-">-Select-</option>
<option value="Please Select">Please Select</option>
<option value="I've Played With BreakoutIQ Before!">I've Played With BreakoutIQ Before!</option>
<option value="Referral">Referral</option>
<option value="Yelp">Yelp</option>
<option value="Google">Google</option>
<option value="Facebook">Facebook</option>
<option value="Other">Other</option>
</select>
                                <p id="Dropdown_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
                            </div>
                            <div class="zf-clearBoth"></div>
                        </li>
                        <!---------Dropdown Ends Here---------->
                        <!---------HIDDEN Single Line Starts Here---------->
<input type="hidden" name="SingleLine4" checktype="c1" value="TestPage" maxlength="255" invlovedinsalesiq=false />
                        <!---------Single Line Ends Here---------->                          
                    </ul>
                </div>
                <!---------template Container Starts Here---------->
                <ul>
                    <li class="zf-fmFooter"><button class="zf-submitColor">Submit</button></li>
                </ul>
            </div>
            <!-- 'zf-templateWrapper' ends -->
        </form>
    </div>
    <!-- 'zf-templateWidth' ends -->
    <script type="text/javascript">
        var zf_DateRegex = new RegExp("^(([0][1-9])|([1-2][0-9])|([3][0-1]))[\/]([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$");
        var zf_MandArray = ["SingleLine", "Email", "SingleLine1", "SingleLine2"];
        var zf_FieldArray = ["SingleLine", "Email", "PhoneNumber_countrycode", "SingleLine1", "SingleLine2", "SingleLine3", "MultiLine", "Dropdown"];
        var isSalesIQIntegrationEnabled = false;
    </script>"
    `;