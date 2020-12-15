function makeMap(idOfMap) {
    let elemMap = document.querySelector("#" + idOfMap)
    elemMap.style.width = "100%"
    elemMap.style.height = "100%"
    elemMap.insertAdjacentHTML('afterbegin', `
        <div id="top">
            <select>
                <option value="div1">цвет по названию</option>
                <option value="div2">цвет по числу</option>
                <option value="div3">кардинальные данные</option>
            </select>
        </div>

        <div id="div1">
            <div id="map"></div>
        </div>

        <div id="div2" style="overflow: hidden">
            <div id="legend1">
                <div id="changeColors">
                    <div id = "tuning1" class = "tuning">
                        <div class = "arrowBottom"></div>
                        <div class = "textOfTuning">количество цветов</div>
                        <div class = "bodyOfTuning">
                            <!-- <div id = "bodyOfTuning1" class = "bodyOfTuning"> -->
                            <div style="z-index: 10" class = "stingOfBody"><div class = "textOfString">ограничить количесво цветов значением терлимбомммм <input type="number" id="inp1"></div> <input type="checkbox" id="check1"></div>
                            <div style="z-index: 10" class = "stingOfBody"><div class = "textOfString">не ограничивать</div> <input type="checkbox" id="check2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="map2"></div>
        </div>

        <div id="div3">
            <div id="legend2"></div>
            <div id="map3"></div>
            <div id="changeColor">
                <div id="button1" data-tooltip="lala"></div>
                <!-- <button></button> -->
                <div id="cont"></div>
            </div>
        </div>
    `)
}