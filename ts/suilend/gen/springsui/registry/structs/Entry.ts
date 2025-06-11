import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
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
import { PKG_V5 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isEntry(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V5}::registry::Entry` + "<");
}

export interface EntryFields<T0 extends TypeArgument> {
  adminCapId: ToField<ID>;
  liquidStakingInfoId: ToField<ID>;
  extraInfo: ToField<T0>;
}

export type EntryReified<T0 extends TypeArgument> = Reified<
  Entry<T0>,
  EntryFields<T0>
>;

/**
 * Move struct: `Entry`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::registry`
 *
 * @typeParam T0 - Type parameter 0
 */
export class Entry<T0 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V5}::registry::Entry`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = Entry.$typeName;
  readonly $fullTypeName: `${typeof PKG_V5}::registry::Entry<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = Entry.$isPhantom;

  readonly adminCapId: ToField<ID>;
  readonly liquidStakingInfoId: ToField<ID>;
  readonly extraInfo: ToField<T0>;

  private constructor(typeArgs: [ToTypeStr<T0>], fields: EntryFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Entry.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V5}::registry::Entry<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.adminCapId = fields.adminCapId;
    this.liquidStakingInfoId = fields.liquidStakingInfoId;
    this.extraInfo = fields.extraInfo;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): EntryReified<ToTypeArgument<T0>> {
    return {
      typeName: Entry.$typeName,
      fullTypeName: composeSuiType(
        Entry.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V5}::registry::Entry<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: Entry.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => Entry.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Entry.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Entry.fromBcs(T0, data),
      bcs: Entry.bcs(toBcs(T0)),
      fromJSONField: (field: any) => Entry.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Entry.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Entry.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Entry.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        Entry.fetch(client, T0, id),
      new: (fields: EntryFields<ToTypeArgument<T0>>) => {
        return new Entry([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Entry.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Entry<ToTypeArgument<T0>>>> {
    return phantom(Entry.reified(T0));
  }
  static get p() {
    return Entry.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`Entry<${T0.name}>`, {
        admin_cap_id: ID.bcs,
        liquid_staking_info_id: ID.bcs,
        extra_info: T0,
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Entry<ToTypeArgument<T0>> {
    return Entry.reified(typeArg).new({
      adminCapId: decodeFromFields(ID.reified(), fields.admin_cap_id),
      liquidStakingInfoId: decodeFromFields(
        ID.reified(),
        fields.liquid_staking_info_id,
      ),
      extraInfo: decodeFromFields(typeArg, fields.extra_info),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Entry<ToTypeArgument<T0>> {
    if (!isEntry(item.type)) {
      throw new Error("not a Entry type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Entry.reified(typeArg).new({
      adminCapId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.admin_cap_id,
      ),
      liquidStakingInfoId: decodeFromFieldsWithTypes(
        ID.reified(),
        item.fields.liquid_staking_info_id,
      ),
      extraInfo: decodeFromFieldsWithTypes(typeArg, item.fields.extra_info),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): Entry<ToTypeArgument<T0>> {
    return Entry.fromFields(typeArg, Entry.bcs(toBcs(typeArg)).parse(data));
  }

  toJSONField() {
    return {
      adminCapId: this.adminCapId,
      liquidStakingInfoId: this.liquidStakingInfoId,
      extraInfo: fieldToJSON<T0>(this.$typeArgs?.[0], this.extraInfo),
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
  ): Entry<ToTypeArgument<T0>> {
    return Entry.reified(typeArg).new({
      adminCapId: decodeFromJSONField(ID.reified(), field.adminCapId),
      liquidStakingInfoId: decodeFromJSONField(
        ID.reified(),
        field.liquidStakingInfoId,
      ),
      extraInfo: decodeFromJSONField(typeArg, field.extraInfo),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Entry<ToTypeArgument<T0>> {
    if (json.$typeName !== Entry.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Entry.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Entry.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Entry<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isEntry(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Entry object`,
      );
    }
    return Entry.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Entry<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isEntry(data.bcs.type)) {
        throw new Error(`object at is not a Entry object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return Entry.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Entry.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Entry<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Entry object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isEntry(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Entry object`);
    }

    return Entry.fromSuiObjectData(typeArg, res.data);
  }
}
