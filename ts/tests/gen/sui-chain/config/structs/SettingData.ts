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
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isSettingData(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::config::SettingData` + "<");
}

export interface SettingDataFields<T0 extends TypeArgument> {
  newerValueEpoch: ToField<"u64">;
  newerValue: ToField<Option<T0>>;
  olderValueOpt: ToField<Option<T0>>;
}

export type SettingDataReified<T0 extends TypeArgument> = Reified<
  SettingData<T0>,
  SettingDataFields<T0>
>;

/**
 * Move struct: `SettingData`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::config`
 *
 * @typeParam T0 - Type parameter 0
 */
export class SettingData<T0 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::config::SettingData`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = SettingData.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::config::SettingData<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = SettingData.$isPhantom;

  readonly newerValueEpoch: ToField<"u64">;
  readonly newerValue: ToField<Option<T0>>;
  readonly olderValueOpt: ToField<Option<T0>>;

  private constructor(
    typeArgs: [ToTypeStr<T0>],
    fields: SettingDataFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      SettingData.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::config::SettingData<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.newerValueEpoch = fields.newerValueEpoch;
    this.newerValue = fields.newerValue;
    this.olderValueOpt = fields.olderValueOpt;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): SettingDataReified<ToTypeArgument<T0>> {
    return {
      typeName: SettingData.$typeName,
      fullTypeName: composeSuiType(
        SettingData.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::config::SettingData<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: SettingData.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        SettingData.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        SettingData.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => SettingData.fromBcs(T0, data),
      bcs: SettingData.bcs(toBcs(T0)),
      fromJSONField: (field: any) => SettingData.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => SettingData.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        SettingData.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        SettingData.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        SettingData.fetch(client, T0, id),
      new: (fields: SettingDataFields<ToTypeArgument<T0>>) => {
        return new SettingData([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return SettingData.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<SettingData<ToTypeArgument<T0>>>> {
    return phantom(SettingData.reified(T0));
  }
  static get p() {
    return SettingData.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`SettingData<${T0.name}>`, {
        newer_value_epoch: bcs.u64(),
        newer_value: Option.bcs(T0),
        older_value_opt: Option.bcs(T0),
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): SettingData<ToTypeArgument<T0>> {
    return SettingData.reified(typeArg).new({
      newerValueEpoch: decodeFromFields("u64", fields.newer_value_epoch),
      newerValue: decodeFromFields(Option.reified(typeArg), fields.newer_value),
      olderValueOpt: decodeFromFields(
        Option.reified(typeArg),
        fields.older_value_opt,
      ),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): SettingData<ToTypeArgument<T0>> {
    if (!isSettingData(item.type)) {
      throw new Error("not a SettingData type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return SettingData.reified(typeArg).new({
      newerValueEpoch: decodeFromFieldsWithTypes(
        "u64",
        item.fields.newer_value_epoch,
      ),
      newerValue: decodeFromFieldsWithTypes(
        Option.reified(typeArg),
        item.fields.newer_value,
      ),
      olderValueOpt: decodeFromFieldsWithTypes(
        Option.reified(typeArg),
        item.fields.older_value_opt,
      ),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): SettingData<ToTypeArgument<T0>> {
    const typeArgs = [typeArg];

    return SettingData.fromFields(
      typeArg,
      SettingData.bcs(toBcs(typeArgs[0])).parse(data),
    );
  }

  toJSONField() {
    return {
      newerValueEpoch: this.newerValueEpoch.toString(),
      newerValue: fieldToJSON<Option<T0>>(
        `${Option.$typeName}<${this.$typeArgs[0]}>`,
        this.newerValue,
      ),
      olderValueOpt: fieldToJSON<Option<T0>>(
        `${Option.$typeName}<${this.$typeArgs[0]}>`,
        this.olderValueOpt,
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
  ): SettingData<ToTypeArgument<T0>> {
    return SettingData.reified(typeArg).new({
      newerValueEpoch: decodeFromJSONField("u64", field.newerValueEpoch),
      newerValue: decodeFromJSONField(
        Option.reified(typeArg),
        field.newerValue,
      ),
      olderValueOpt: decodeFromJSONField(
        Option.reified(typeArg),
        field.olderValueOpt,
      ),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): SettingData<ToTypeArgument<T0>> {
    if (json.$typeName !== SettingData.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(SettingData.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return SettingData.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): SettingData<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSettingData(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a SettingData object`,
      );
    }
    return SettingData.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): SettingData<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isSettingData(data.bcs.type)) {
        throw new Error(`object at is not a SettingData object`);
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

      return SettingData.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return SettingData.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<SettingData<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching SettingData object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isSettingData(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a SettingData object`);
    }

    return SettingData.fromSuiObjectData(typeArg, res.data);
  }
}
