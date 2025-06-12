import * as reified from "../../../../../_framework/reified.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { Table } from "../../../0x2/table/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { Empty as Empty1 } from "./Empty.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isSet(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::set::Set` + "<");
}

export interface SetFields<T0 extends PhantomTypeArgument> {
  items: ToField<Table<T0, ToPhantom<Empty1>>>;
}

export type SetReified<T0 extends PhantomTypeArgument> = Reified<Set<T0>, SetFields<T0>>;

/**
 * Move struct: `Set`
 * Module: `5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a::set`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class Set<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::set::Set`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Set.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::set::Set<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = Set.$isPhantom;

  readonly items: ToField<Table<T0, ToPhantom<Empty1>>>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: SetFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Set.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::set::Set<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.items = fields.items;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): SetReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: Set.$typeName,
      fullTypeName: composeSuiType(
        Set.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V1}::set::Set<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: Set.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => Set.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Set.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Set.fromBcs(T0, data),
      bcs: Set.bcs,
      fromJSONField: (field: any) => Set.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Set.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => Set.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => Set.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => Set.fetch(client, T0, id),
      new: (fields: SetFields<ToPhantomTypeArgument<T0>>) => {
        return new Set([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Set.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Set<ToPhantomTypeArgument<T0>>>> {
    return phantom(Set.reified(T0));
  }
  static get p() {
    return Set.phantom;
  }

  static get bcs() {
    return bcs.struct("Set", {
      items: Table.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Set<ToPhantomTypeArgument<T0>> {
    return Set.reified(typeArg).new({
      items: decodeFromFields(
        Table.reified(typeArg, reified.phantom(Empty1.reified())),
        fields.items,
      ),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Set<ToPhantomTypeArgument<T0>> {
    if (!isSet(item.type)) {
      throw new Error("not a Set type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Set.reified(typeArg).new({
      items: decodeFromFieldsWithTypes(
        Table.reified(typeArg, reified.phantom(Empty1.reified())),
        item.fields.items,
      ),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): Set<ToPhantomTypeArgument<T0>> {
    return Set.fromFields(typeArg, Set.bcs.parse(data));
  }

  toJSONField() {
    return {
      items: this.items.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): Set<ToPhantomTypeArgument<T0>> {
    return Set.reified(typeArg).new({
      items: decodeFromJSONField(
        Table.reified(typeArg, reified.phantom(Empty1.reified())),
        field.items,
      ),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Set<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== Set.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Set.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Set.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Set<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isSet(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Set object`);
    }
    return Set.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Set<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isSet(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Set object`);
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

      return Set.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Set.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Set<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Set object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isSet(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Set object`);
    }

    return Set.fromSuiObjectData(typeArg, res.data);
  }
}
