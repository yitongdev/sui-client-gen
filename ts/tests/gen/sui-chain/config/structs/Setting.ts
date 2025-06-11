import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Option } from "../../../move-stdlib-chain/option/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { SettingData as SettingData1 } from "./SettingData.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isSetting(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::config::Setting` + "<");
}

export interface SettingFields<T0 extends TypeArgument> {
  data: ToField<Option<SettingData1<T0>>>;
}

export type SettingReified<T0 extends TypeArgument> = Reified<
  Setting<T0>,
  SettingFields<T0>
>;

/**
 * Move struct: `Setting`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::config`
 *
 * @typeParam T0 - Type parameter 0
 */
export class Setting<T0 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::config::Setting`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = Setting.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::config::Setting<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = Setting.$isPhantom;

  readonly data: ToField<Option<SettingData1<T0>>>;

  private constructor(typeArgs: [ToTypeStr<T0>], fields: SettingFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Setting.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::config::Setting<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.data = fields.data;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): SettingReified<ToTypeArgument<T0>> {
    return {
      typeName: Setting.$typeName,
      fullTypeName: composeSuiType(
        Setting.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::config::Setting<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: Setting.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        Setting.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Setting.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Setting.fromBcs(T0, data),
      bcs: Setting.bcs(toBcs(T0)),
      fromJSONField: (field: any) => Setting.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Setting.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Setting.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Setting.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        Setting.fetch(client, T0, id),
      new: (fields: SettingFields<ToTypeArgument<T0>>) => {
        return new Setting([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Setting.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Setting<ToTypeArgument<T0>>>> {
    return phantom(Setting.reified(T0));
  }
  static get p() {
    return Setting.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`Setting<${T0.name}>`, {
        data: Option.bcs(SettingData1.bcs(T0)),
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Setting<ToTypeArgument<T0>> {
    return Setting.reified(typeArg).new({
      data: decodeFromFields(
        Option.reified(SettingData1.reified(typeArg)),
        fields.data,
      ),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Setting<ToTypeArgument<T0>> {
    if (!isSetting(item.type)) {
      throw new Error("not a Setting type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Setting.reified(typeArg).new({
      data: decodeFromFieldsWithTypes(
        Option.reified(SettingData1.reified(typeArg)),
        item.fields.data,
      ),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): Setting<ToTypeArgument<T0>> {
    const typeArgs = [typeArg];

    return Setting.fromFields(
      typeArg,
      Setting.bcs(toBcs(typeArgs[0])).parse(data),
    );
  }

  toJSONField() {
    return {
      data: fieldToJSON<Option<SettingData1<T0>>>(
        `${Option.$typeName}<${SettingData1.$typeName}<${this.$typeArgs[0]}>>`,
        this.data,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    field: any,
  ): Setting<ToTypeArgument<T0>> {
    return Setting.reified(typeArg).new({
      data: decodeFromJSONField(
        Option.reified(SettingData1.reified(typeArg)),
        field.data,
      ),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Setting<ToTypeArgument<T0>> {
    if (json.$typeName !== Setting.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Setting.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Setting.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Setting<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSetting(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Setting object`,
      );
    }
    return Setting.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Setting<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isSetting(data.bcs.type)) {
        throw new Error(`object at is not a Setting object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
        );
      }

      return Setting.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Setting.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Setting<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Setting object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isSetting(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Setting object`);
    }

    return Setting.fromSuiObjectData(typeArg, res.data);
  }
}
